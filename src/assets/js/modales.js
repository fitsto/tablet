if (!('contains' in String.prototype)) {
    // Pollyfil función contains para navegadores que no la soporten
    String.prototype.contains = function(str, startIndex) {
        return -1 !== String.prototype.indexOf.call(this, str, startIndex);
    };
}

var body_position;

function stopBodyScrolling(bool) {
    if (bool === true) {
        body_position = window.pageYOffset || document.documentElement.scrollTop;
        document.querySelector('html').classList.add('modal_active');
        document.querySelector('body').classList.add('modal_active');
        document.querySelector('body').style.top = '-' + body_position + 'px';
    } else {
        document.querySelector('html').classList.remove('modal_active');
        document.querySelector('body').classList.remove('modal_active');
        document.querySelector('html').scrollTop = body_position;
        document.querySelector('body').scrollTop = body_position;
    }
}

function fadeOut(el) {
    // Animación fade out (cierre)
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function fadeIn(el) {
    // Animación fade in (apertura)
    el.style.opacity = 0;
    el.style.display = "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (((val += 0.1) > 1) === false) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

function cerrarModal() {
    // Devuelve el overflow al body y cierra la modal
    fadeOut(document.querySelector('.modal_box.active'));
    document.querySelector('.modal_box.active').classList.remove('active');

    // Enable scroll
    stopBodyScrolling(false);
}

function heightModal() {
    // Arregla el alto de la modal en responsive
    // Calcula en porcentaje el alto de la ventana y el alto del contenido de la modal
    var modal_overflow = document.querySelectorAll('.modal_box .modal_content .overflow');
    var windowsHeight = window.innerHeight;
    var maxHeight = Math.ceil(windowsHeight * 65 / 100);

    if (modal_overflow.length > 0) {
        modal_overflow.forEach(function(element) {
            element.style.overflow = 'auto';
            element.style.maxHeight = maxHeight + 'px';
            element.style.paddingRight = '15px';
        });
    } else {
        return false;
    }
}

function crearModal(target, content, width) {

    var has_content, icon, content_box;

    [].forEach.call(target.childNodes, function(e) {
        if (e.nodeName !== '#text') {
            if (e.classList.contains('icon-top')) {
                icon = e;
            } else if (e.classList.contains('cont')) {
                has_content = true;
            } else if (e.classList.contains('content_box')) {
                content_box = e;
            }

        } else {
            has_content = false;
        }
    });

    if (has_content === false) {
        var cont, cont_ext, cont_int, center, modal_content, btn_cont, btn, cont_blanco, overflow;
        cont = document.createElement('div');
        cont.classList.add('cont');
        cont_ext = document.createElement('div');
        cont_ext.classList.add('cont-ext');
        cont_int = document.createElement('div');
        cont_int.classList.add('cont-int');
        center = document.createElement('div');
        center.classList.add('center');
        modal_content = document.createElement('div');
        modal_content.classList.add('modal_content');
        btn_cont = document.createElement('div');
        btn_cont.classList.add('txt-right');
        btn = document.createElement('a');
        btn.classList.add('cerrar-modal_box');
        btn.addEventListener('click', cerrarModal);
        btn.innerHTML = '<span class="icon-cerrar"></span>';
        cont_blanco = document.createElement('div');
        cont_blanco.classList.add('cont-blanco');
        overflow = document.createElement('div');
        overflow.classList.add('overflow');

        if (width !== false) {
            center.classList.add('col-md-' + width);
        }

        target.innerHTML = '';
        overflow.appendChild(content_box);

        if (icon) {
            modal_content.appendChild(icon);
        }
        cont_blanco.appendChild(overflow);
        btn_cont.appendChild(btn);
        modal_content.appendChild(btn_cont);
        modal_content.appendChild(cont_blanco);
        center.appendChild(modal_content);
        cont_int.appendChild(center);
        cont_ext.appendChild(cont_int);
        cont.appendChild(cont_ext);
        target.appendChild(cont);
    }
}

function abrirModal(elem, content, width) {
    // Función principal
    // Se debe definir el target si hay más de una modal

    var target;

    if (elem === false) {
        // Si no se le pasa un elemento, tomará como target
        // la primera modal que encuentre
        target = document.querySelectorAll('.modal_box')[0];
    } else {
        // Si tiene target, se le asigna a la variable
        target = document.querySelector(elem);
    }

    // Crea estructura modal
    crearModal(target, content, width);

    // Disable scroll
    stopBodyScrolling(true);

    // Fix height modal
    heightModal();

    // Abrimos la modal
    fadeIn(target);
    target.classList.add('active');
}

$(document).on('click', 'page-ruta-emprende .open-modal_box', function(evt) {
    // Se les otorga el evento click, para abrir la modal

    var target;
    var data_target = this.attributes['data-target'];
    var data_content = this.attributes['data-content'];
    var data_width = this.attributes['data-width'];
    var width, content;

    if (data_content !== null && data_content !== undefined && typeof data_content !== 'undefined') {
        // Si tiene la propiedad data-content se le asigna a la variable
        content = data_content.value.replace(/\u00A0/g, '');
    } else {
        // Si no tiene la propiedad data-content se le asigna false
        content = false;
    }

    if (data_target !== null && data_target !== undefined && typeof data_target !== 'undefined') {
        // Si tiene target se abre la modal con el target seleccionado
        target = data_target.value.replace(/\u00A0/g, '');
    } else {
        // Si no tiene target, se le asigna false
        target = false;
    }

    if (data_width !== null && data_width !== undefined && typeof data_width !== 'undefined') {
        // Si tiene target se abre la modal con el target seleccionado
        width = data_width.value.replace(/\u00A0/g, '');
    } else {
        // Si no tiene target, se le asigna false
        width = false;
    }

    abrirModal(target, content, width);
});

$(document).on('click', 'page-ruta-emprende .open-modal_box', function(evt) {
    // Se añade el evento para cerrar la modal haciendo click fuera del contenido
    if (evt.target.classList.contains('cont-int')) {
        //cerrarModal();
    }
});

window.addEventListener('resize', function() {
    // Cuando se hace resize de la ventana,
    //se ejecuta la función que arregla el alto de la modal
    heightModal();
});