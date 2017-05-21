document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded

    //alias for qsa
    function $(el) {
        return document.querySelector(el);
    }
    $('.hamburger').addEventListener('click', function() {
        $('.navbar').classList.toggle('mobile');
    });

    var app1 = new Vue ({
        el: '#watches-list',
        data: {
            watches: [
                {
                    name: 'Brajbling',
                    photo: 'img/braitling.png',
                    price: Math.floor(Math.random() * 1000) + ".99$"
                },
                {
                    name: 'Rolnix',
                    photo: 'img/rolnix.png',
                    price: Math.floor(Math.random() * 1000) + ".99$"
                },
                {
                    name: 'Tag hajer',
                    photo: 'img/hauer.png',
                    price: Math.floor(Math.random() * 1000) + ".99$"
                },
                {
                    name: 'Lamaga 007',
                    photo: 'img/omega.png',
                    price: Math.floor(Math.random() * 1000) + ".99$"
                },
                {
                    name: 'Patyk Filip',
                    photo: 'img/patek.png',
                    price: Math.floor(Math.random() * 1000) + ".99$"
                }

            ],
        }
    })
});




