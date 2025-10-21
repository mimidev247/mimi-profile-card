const form = document.getElementById('contact-form');
      const successMessage = document.querySelector('[data-testid="test-contact-success"]');

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      function showError(fieldName, message) {
        const formGroup = document.querySelector(`#${fieldName}`).closest('.form-group');
        const errorElement = document.getElementById(`error-${fieldName}`);
        
        formGroup.classList.add('has-error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
      }

      function clearError(fieldName) {
        const formGroup = document.querySelector(`#${fieldName}`).closest('.form-group');
        const errorElement = document.getElementById(`error-${fieldName}`);
        
        formGroup.classList.remove('has-error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
      }

      function clearAllErrors() {
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(group => {
          group.classList.remove('has-error');
        });
        
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
          error.textContent = '';
          error.classList.remove('show');
        });
      }

      function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        clearError(fieldName);
        
        // Check if field is empty
        if (!value) {
          showError(fieldName, `${field.labels[0].textContent.replace(' *', '')} is required`);
          return false;
        }
        
        // Email specific validation
        if (fieldName === 'email' && !emailRegex.test(value)) {
          showError(fieldName, 'Please enter a valid email address (e.g., name@example.com)');
          return false;
        }
        
        // Message minimum length validation
        if (fieldName === 'message' && value.length < 10) {
          showError(fieldName, 'Message must be at least 10 characters long');
          return false;
        }
        
        return true;
      }

      function validateForm() {
        const fields = ['name', 'email', 'subject', 'message'];
        let isValid = true;
        
        clearAllErrors();
        
        fields.forEach(fieldName => {
          const field = document.getElementById(fieldName);
          if (!validateField(field)) {
            isValid = false;
          }
        });
        
        return isValid;
      }

      // Real-time validation on blur
      form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('blur', () => {
          if (field.value.trim()) {
            validateField(field);
          }
        });
        
        field.addEventListener('input', () => {
          if (field.closest('.form-group').classList.contains('has-error')) {
            validateField(field);
          }
        });
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        successMessage.classList.remove('show');
        
        if (validateForm()) {
          // Show success message
          successMessage.classList.add('show');
          
          // Reset form
          form.reset();
          clearAllErrors();
          
          // Scroll to success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          
          // Focus on success message for screen readers
          successMessage.focus();
        } else {
          // Focus on first error
          const firstError = document.querySelector('.form-group.has-error input, .form-group.has-error textarea');
          if (firstError) {
            firstError.focus();
          }
        }
      });