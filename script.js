// essa função retorna o html pra cada perfil
function generateProfile(profile, num){
    return /*html*/`
        <!-- Profile -->
        <div class="col-lg-4 col-12">
          <div class="card">
            <img class="card-img-top" style="text-align: center;" src="images/${profile.image}" alt="Card image cap">
            <div class="card-body text-center">
              <h2 class="card-title">${profile.name}</h2>
              <p class="card-text">${profile.stack} from ${profile.city}/${profile.uf}</p>
              <a class="btn profile-button" data-toggle="modal" href="#collapseExample${num}" role="button" aria-expanded="false" aria-controls="collapseExample${num}">Informações</a>
              ${generateModal(profile, num)}
            </div>
          </div>
        </div>
        <!-- /Profile -->
    `
}

function generateModal(profile, num){
    return /*html*/`
        <!-- Modal -->
        <div class="modal fade" id="collapseExample${num}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Informações</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-justify">
                    <h5>
                        Sonho grande:<br/><br/>
                        <small class="text-muted">${profile.dream}</small>
                    </h5>
                    <h5>
                        O que quero aprender:<br/><br/>
                        <small class="text-muted">${profile.learn}</small>
                    </h5>
                    <h5>
                        O que posso ensinar:<br/><br/>
                        <small class="text-muted">${profile.teach}</small>
                    </h5>
                    <h5>
                        Em um ano estarei:<br/><br/>
                        <small class="text-muted">${profile.oneyear}</small>
                    </h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    `
}

let profiles = document.querySelector('#profiles')

ALUMNIS.forEach((person,n) => {
    profiles.innerHTML += generateProfile(person,n)
});