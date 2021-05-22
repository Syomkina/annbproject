const button = document.querySelector('.btn')
button.addEventListener('click', showModal)
function showModal() {

        const divModal = document.createElement('div')

        divModal.classList.add('main')

    divModal.insertAdjacentHTML('afterbegin',`
        <div class="newmodal">
            <div class="title-container">
                <h1 class="title">lorem</h1>
                <span>&times;</span>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque natus cum a explicabo magnam quae facere, dolorum ut molestias sunt tempore possimus, doloremque minus nobis voluptate amet, dignissimos molestiae!</p></p>
            <button>tnx</button>
        </div>
        `)

        document.body.appendChild(divModal)
    }

     window.onclick = function(event) {

        let modal = document.querySelector('.newmodal button')
        let close = document.querySelector('.title-container span')

        if(event.target == modal || event.target == close){
            document.querySelector('.main').remove()
        }
    
    }