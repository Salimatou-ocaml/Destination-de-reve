function displayDateAndHour(): void {
    const now: Date = new Date();
    const dateTimeContainer = document.getElementById('date-time-container');
    if (dateTimeContainer) {
        dateTimeContainer.innerHTML = now.toLocaleString();
    }
}

// Bascule entre la feuille de style principale (styles[0]) et l'alternative (styles[1])
function toggleStyle(): void {
    const styles = document.styleSheets;

    const principal = styles[0];
    const alternatif = styles[1];

    const principalActif = !principal.disabled;

    principal.disabled = principalActif;
    alternatif.disabled = !principalActif;
}

function setupToggleButton(): void {
    const toggleButton = document.getElementById('toggle-style-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleStyle);
    }
}

// Fonction pour remplir le champ caché userAgentInformations
function updateUserAgentInformation(): void {
    const userAgentInfo: string =
        "Navigateur: " + navigator.userAgent +
        ", Plateforme: " + navigator.platform +
        ", Langue: " + navigator.language;
    const input = document.getElementById("userAgentInformations") as HTMLInputElement | null;
    if (input) input.value = userAgentInfo;
}

// Validation réutilisable avec changement de style
function validateTextInput(inputId: string, messageId: string, type: string): boolean {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    const message = document.getElementById(messageId) as HTMLElement | null;
    if (!input || !message) return false;
    const value: string = input.value;
    if (value.length < 3) {
        message.textContent = `Le ${type} doit contenir au moins 3 caractères.`;
        input.style.borderColor = "red";
        return false;
    }
    if (/\d/.test(value)) {
        message.textContent = `Le ${type} ne doit pas contenir de chiffres.`;
        input.style.borderColor = "red";
        return false;
    }
    message.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} valide!`;
    input.style.borderColor = "green";
    return true;
}

function validateEmailInput(): boolean {
    const emailInput = document.getElementById("email") as HTMLInputElement | null;
    const messageEmailSpan = document.getElementById("messageEmail") as HTMLElement | null;
    if (!emailInput || !messageEmailSpan) return false;
    const email: string = emailInput.value;
    // Texte sans espace ni @, puis un @, puis du texte, un point, et du texte (ex : prenom.nom@univ-poitiers.fr)
    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        messageEmailSpan.textContent = "Adresse email invalide.";
        emailInput.style.borderColor = "red";
        return false;
    }
    messageEmailSpan.textContent = "Adresse email valide!";
    emailInput.style.borderColor = "green";
    return true;
}

function validateAgeInput(): boolean {
    const ageInput = document.getElementById("age") as HTMLInputElement | null;
    const messageAgeSpan = document.getElementById("messageAge") as HTMLElement | null;
    if (!ageInput || !messageAgeSpan) return false;
    const age: number = parseInt(ageInput.value, 10);
    if (isNaN(age) || age < 18) {
        messageAgeSpan.textContent = "Vous devez avoir au moins 18 ans.";
        ageInput.style.borderColor = "red";
        return false;
    }
    messageAgeSpan.textContent = "Âge valide!";
    ageInput.style.borderColor = "green";
    return true;
}

function setupFormValidation(): void {
    const form = document.getElementById('formulaire-inscription') as HTMLFormElement | null;
    if (!form) return;

    // Le questionnaire voyage utilise le même id de formulaire mais n'a pas
    // les champs prénom, nom, email et âge : on ne les vérifie que s'ils existent.
    const aChampsInscription: boolean = document.getElementById('prenom') !== null;

    form.onsubmit = function(event: Event): void {
        const prenomValid = !aChampsInscription || validateTextInput('prenom', 'messagePrenom', 'prénom');
        const nomValid = !aChampsInscription || validateTextInput('nom', 'messageNom', 'nom');
        const emailValid = !aChampsInscription || validateEmailInput();
        const ageValid = !aChampsInscription || validateAgeInput();
        const accepteCheckbox = document.getElementById('accepte') as HTMLInputElement | null;
        // La case « conditions générales » n'est obligatoire que si elle existe
        const accepte: boolean = accepteCheckbox ? accepteCheckbox.checked : true;

        if (!prenomValid || !nomValid || !emailValid || !ageValid || !accepte) {
            alert("Veuillez corriger les erreurs dans le formulaire et accepter les conditions générales.");
            event.preventDefault();
        }
    };

    const prenomInput = document.getElementById('prenom');
    if (prenomInput) prenomInput.onblur = () => validateTextInput('prenom', 'messagePrenom', 'prénom');
    const nomInput = document.getElementById('nom');
    if (nomInput) nomInput.onblur = () => validateTextInput('nom', 'messageNom', 'nom');
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.onblur = validateEmailInput;
    const ageInput = document.getElementById('age');
    if (ageInput) ageInput.onblur = validateAgeInput;

    // Ajout du bouton de test de validité globale
    const testValiditeBtn = document.getElementById('test-validite');
    if (testValiditeBtn) {
        testValiditeBtn.onclick = function(): void {
            const prenomOk = !aChampsInscription || validateTextInput('prenom', 'messagePrenom', 'prénom');
            const nomOk = !aChampsInscription || validateTextInput('nom', 'messageNom', 'nom');
            const emailOk = !aChampsInscription || validateEmailInput();
            const ageOk = !aChampsInscription || validateAgeInput();
            if (prenomOk && nomOk && emailOk && ageOk) {
                alert("Tous les champs sont valides !");
            } else {
                alert("Veuillez corriger les erreurs dans le formulaire.");
            }
        }
    }
}

// -----------------------------------------------------------------------------
// Fonctions d'autoévaluation (autoéval) :
// - Affiche la moyenne des valeurs des curseurs (input type range) dans le champ 'average'.
// - Met à jour la couleur du label associé à chaque curseur selon la valeur :
//      0   => blanc sur fond rouge
//      100 => blanc sur fond vert
//      autre => blanc sur fond orange
// La mise à jour se fait au chargement de la page ET lorsqu'on déplace un curseur.
// -----------------------------------------------------------------------------

function updateAutoEval(): void {
    const table = document.getElementById("autotable") as HTMLTableElement | null;
    if (!table) return;
    const trs = table.getElementsByTagName("tr");
    let sum: number = 0;
    let nb: number = 0;
    for (let i = 0; i < trs.length; i++) {
        const input = trs[i].getElementsByTagName("input")[0] as HTMLInputElement | undefined;
        const label = trs[i].getElementsByTagName("label")[0] as HTMLLabelElement | undefined;
        // On ne traite la ligne que si input et label existent (sécurité)
        if (input && label) {
            const val: number = parseInt(input.value, 10);
            sum += val;
            nb++;
            label.innerHTML = val.toString();
            if (val === 0) {
                label.style.backgroundColor = "red";
                label.style.color = "white";
            } else if (val === 100) {
                label.style.backgroundColor = "green";
                label.style.color = "white";
            } else {
                label.style.backgroundColor = "orange";
                label.style.color = "white";
            }
        }
    }
    // On évite une division par zéro
    const averageInput = document.getElementById("average") as HTMLInputElement | null;
    if (nb > 0 && averageInput) {
        averageInput.value = Math.round(sum / nb).toString();
    }
}

function setupAutoEval(): void {
    const table = document.getElementById("autotable") as HTMLTableElement | null;
    if (!table) return;
    const trs = table.getElementsByTagName("tr");
    for (let i = 0; i < trs.length; i++) {
        const input = trs[i].getElementsByTagName("input")[0] as HTMLInputElement | undefined;
        if (input) {
            input.oninput = updateAutoEval;
        }
    }
    updateAutoEval();
}

// -----------------------------------------------------------------------------
// Lien "Fiche au hasard" : à chaque clic, redirige vers une page différente de la collection aléatoirement
// -----------------------------------------------------------------------------

const collectionLinks: string[] = [
    "../Content/Collection/index.html",
    "../Content/Collection/grece.xhtml",
    "../Content/Collection/japon.xhtml",
    "../Content/Collection/Namibie.xhtml",
    "../Content/Collection/Turquie.xhtml"
];

function setupRandomLink(): void {
    const randomLinkElement = document.getElementById("random-link") as HTMLAnchorElement | null;
    if (randomLinkElement) {
        randomLinkElement.addEventListener("click", function(event: MouseEvent) {
            event.preventDefault();
            const randomIndex: number = Math.floor(Math.random() * collectionLinks.length);
            const randomHref: string = collectionLinks[randomIndex];
            window.location.href = randomHref;
        });
    }
}

// --------------------
// Appel de toutes les initialisations au chargement de la page :
// on utilise DOMContentLoaded (et non window.onload) pour ne pas être écrasé
// par un attribut onload placé sur <body>.
document.addEventListener("DOMContentLoaded", function(): void {
    displayDateAndHour();
    setInterval(displayDateAndHour, 60000);
    setupRandomLink();
    setupToggleButton();
    setupFormValidation();
    updateUserAgentInformation();
    setupAutoEval();
});