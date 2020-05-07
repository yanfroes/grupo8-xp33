// essa função retorna o html pra cada perfil
function generateProfile(profile, num){
    return /*html*/`
    <!-- Profile -->
    <div class="col-lg-4 col-12">
      <div class="card destacar" onclick="flip()">
        <div class="front">
        <img class="card-img-top" src="images/${profile.image}" alt="Card image cap">
          <div class="card-body text-center" style="background: transparent !important">
            <h2 class="card-title">${profile.name}</h2>
            <p class="card-text">${profile.stack} from ${profile.city}/${profile.uf}</p>
            <a class="btn profile-button" data-toggle="modal" >Informações</a>
          </div>
        </div>
        <div class=" back">
          <div class="text-justify">
            <h5>
              Sonho grande:
              <small class="text-muted">${profile.dream}</small><br />
            </h5>
            <h5>
              O que quero aprender:
              <small class="text-muted">${profile.learn}</small><br />
            </h5>
            <h5>
              O que posso ensinar:
              <small class="text-muted">${profile.teach}</small><br />
            </h5>
            <h5>
              Em um ano estarei:
              <small class="text-muted">${profile.oneyear}</small><br />
            </h5>
          </div>
        </div>
      </div>
    </div>
    <!-- /Profile -->
    `
}


function flip() {
    $('.card').toggleClass('flipped');
}



let profiles = document.querySelector('#profiles')

ALUMNIS.forEach((person,n) => {
    profiles.innerHTML += generateProfile(person,n)
});
