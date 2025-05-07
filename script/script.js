var imagenes = ['../img/galeriaVisual/01.jfif','../img/galeriaVisual/02.jfif', '../img/galeriaVisual/03.jfif','../img/galeriaVisual/04.jfif', '../img/galeriaVisual/05.jfif', '../img/galeriaVisual/06.jfif', '../img/galeriaVisual/07.jfif', '../img/galeriaVisual/08.jfif', '../img/galeriaVisual/09.jfif'],
    cont = 0;

    function carrousel(galeriaVisual2)
    {
        galeriaVisual2.addEventListener('click', e => 
        {
            let atras = galeriaVisual2.querySelector('.atras'),
                adelante = galeriaVisual2.querySelector('.adelante'),
                img = galeriaVisual2.querySelector('img'),
                tgt = e.target;

            if(tgt == atras)
            {
                if(cont > 0)
                {
                    img.src = imagenes[cont - 1];
                    cont--;
                }
                else
                {
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length - 1;
                }
            }
            else if(tgt == adelante)
            {
                if(cont < imagenes.length -1)
                {
                    img.src = imagenes[cont +1];
                    cont ++;
                }
                else
                {
                    img.src= imagenes[0];
                    cont = 0;
                }
            }
        });
    }

document.addEventListener("DOMContentLoaded", () =>
{
    let galeriaVisual2 = document.querySelector('.galeriaVisual2');
    carrousel(galeriaVisual2);
});