var lifeExample = document.querySelector('.life-example');
var form = document.querySelector('form');

if (lifeExample)
{
    var catBefore = lifeExample.querySelector('.life-example__before');
    var catAfter = lifeExample.querySelector('.life-example__after');
    var buttonBefore = lifeExample.querySelector('.button-before');
    var buttonAfter = lifeExample.querySelector('.button-after');

    
    buttonAfter.addEventListener("click", function(evt){
        evt.preventDefault();
        catBefore.classList.add('visually-hidden');
        catAfter.classList.remove('visually-hidden');
    })

    buttonBefore.addEventListener("click", function(evt){
        evt.preventDefault();
        catAfter.classList.add('visually-hidden');
        catBefore.classList.remove('visually-hidden');
    })
}

if (form)
{
    var requiredsFild = form.querySelectorAll('input[required]');
    requiredsFild.forEach(function(field) {
        field.required = false;
    });
    
    form.addEventListener("submit", function(evt) {
        evt.preventDefault();
        let isNotReportValidity = true;
    
        requiredsFild.forEach(function(field) {
            field.addEventListener('input', function() {
                if (field.value) {
                    field.setCustomValidity('');
                    isNotReportValidity = true;
                }
            });
            
            if (!field.value && isNotReportValidity) {
                field.setCustomValidity('Заполните обязательное поле');
                field.reportValidity();
                isNotReportValidity = false;
            }
    
            if (!field.value) {
                field.classList.add('js-required');
            }
        });
    
    });
}




