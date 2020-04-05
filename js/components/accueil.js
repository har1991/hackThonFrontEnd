const Accueil = {
    template: `
    <div>
    <header>
    <div class="container">
        <div>
            <div class="div_logo">
                <img class="logo" src="./images/Restez_en_ligne.png" alt="Logo">
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-6">
                <div class="h_main_text">
                    <span class="h_title">Restez en ligne</span> est votre
                    allié pour apprendre à utiliser internet et les nouvelles technologies
                    en toute simplicité!
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-6">
                <div class="h_div_img">
                    <img class="h_img" src="./images/hero.png" alt="Groupe de personnes">
                </div>
            </div>
        </div>
    </div>

</header>
<main>
    <div class="m_div_categories">
        <h1>Catégories</h1>
    </div>

    <div class="container">


        <div class="m_pour_demarrer">
            <h1 class="m_main_titles">1. Pour démarrer</h1>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Faire une recherche</h1>
                        <div>
                            <img src="./images/recherche.png" alt="Comment faire une recherches">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Naviguer sur internet</h1>
                        <div>
                            <img src="./images/navigation.png" alt="Navigation sur Internet">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Lexique</h1>
                        <div>
                            <img src="./images/lexique.png" alt="Lexique">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Télécharger</h1>
                        <div>
                            <img src="./images/telecharger.png" alt="Comment télécharger">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m_pour_contact">
            <h1 class="m_main_titles">2. Garder le contact</h1>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <router-link class="m_card_routeur" to="envoyeremail/">
                        <div class="m_card">
                            <h1>Envoyer un email</h1>
                            <div>
                                <img src="./images/mail.png" alt="Envoyer un email">
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Utiliser Facebook</h1>
                        <div>
                            <img src="./images/facebook.png" alt="Utiliser Facebook">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Utiliser Messenger</h1>
                        <div>
                            <img src="./images/messenger.png" alt="Utiliser Messenger">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <router-link class="m_card_routeur" to="details/">
                        <div class="m_card">
                            <h1>Appeler avec Skype</h1>
                            <div>
                                <img src="./images/skype.png" alt="Appeler avec Skype">
                            </div>
                        </div>
                    </router-link>

                </div>
            </div>
        </div>
        <div class="m_quotidien">
            <h1 class="m_main_titles">3. Au quotidien</h1>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Suivre l'actualité</h1>
                        <div>
                            <img src="./images/actu.png" alt="Suivre l'actualité">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Trouver une recette</h1>
                        <div>
                            <img src="./images/recette.png" alt="Trouver une recett">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Organiser sa journée</h1>
                        <div>
                            <img src="./images/organiser.png" alt="Organiser sa journée">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Faire du sport</h1>
                        <div>
                            <img src="./images/sport.png" alt="Faire du sport">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m_achat_depense">
            <h1 class="m_main_titles">4. Achat et dépense</h1>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Sites de vente en ligne</h1>
                        <div>
                            <img src="./images/venteEnLigne.png" alt="Sites de vente en ligne">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Paiement en ligne</h1>
                        <div>
                            <img src="./images/paiement.png" alt="Paiement en ligne">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Banque en ligne</h1>
                        <div>
                            <img src="./images/banque.png" alt="Banque en ligne">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Repérer les arnaques</h1>
                        <div>
                            <img src="./images/arnaque.png" alt="Repérer les arnaques">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m_achat_depense">
            <h1 class="m_main_titles">5. Se divertir</h1>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Musique</h1>
                        <div>
                            <img src="./images/musique.png" alt="Musique en ligne">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Films et séries</h1>
                        <div>
                            <img src="./images/film.png" alt="Films et séries en ligne">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="m_card">
                        <h1>Jeux en ligne</h1>
                        <div>
                            <img src="./images/jeux.png" alt="Jeux en ligne">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <router-link class="m_card_routeur" to="livres/">
                        <div class="m_card">
                            <h1>Livres numériques</h1>
                            <div>
                                <img src="./images/livres.png" alt="Livres numérique">
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</main>
<footer>

</footer>
        </div>

`
}