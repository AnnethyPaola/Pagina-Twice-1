//QUERY GALERIA

const galeria = document.querySelectorAll('.galeria .image'),
    previewbox = document.querySelector('.preview-box'),
    previewimg = previewbox.querySelector('img'),
    closeicon = previewbox.querySelector('.icon'),
    currentImage = previewbox.querySelector('.current-img'),
    totalImage = previewbox.querySelector('.total-img'),
    shadow = document.querySelector('.shadow');

window.onload = () => {
    for (let i = 0; i < galeria.length; i++) {
        totalImage.textContent = galeria.length;
        let newIndex = i;
        let clickimgindex;
        galeria[i].onclick = () => {
            clickimgindex = newIndex;
            console.log(i);

            function preview() {
                currentImage.textContent = newIndex + 1;
                let selectimgurl = galeria[newIndex].querySelector("img").src;
                previewimg.src = selectimgurl;
                console.log(selectimgurl);
            }

            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            if(newIndex == 0){
                prevBtn.style.display = 'none';
            }

            if(newIndex >= galeria.length - 1) {
                nextBtn.style.display = 'none';
            } 

            prevBtn.onclick = () => {
                newIndex--;
                if(newIndex == 0) {
                    preview();
                    prevBtn.style.display = 'none';
                } else {
                    preview();
                    nextBtn.style.display = 'block';
                }
            }

            nextBtn.onclick = () => {
                newIndex++;
                if(newIndex >= galeria.length - 1) {
                    preview();
                    nextBtn.style.display = 'none';
                } else {
                    preview();
                    prevBtn.style.display = 'block';
                }
            }

            preview();
            previewbox.classList.add("show");
            shadow.style.display = 'block';
            document.querySelector("body").style.overflow = 'hidden';
        
            closeicon.onclick = () => {
                newIndex = clickimgindex;
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
                previewbox.classList.remove("show");
                shadow.style.display = 'none';
                document.querySelector("body").style.overflow = 'auto';
            }
        }
    }
}