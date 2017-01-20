/* Contest Management System
 * Copyright © 2013 William Di Luigi <williamdiluigi@gmail.com>
 * Copyright © 2014 Luca Chiodini <luca@chiodini.org>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
'use strict';

angular.module('cmsocial')
  .constant('words', {
    // User interface
    'Close': {
      it: 'Chiudi',
      es: 'Cerrar'
    },
    'Submit': {
      it: 'Invia',
      es: 'Enviar'
    },
    'Run': {
      it: 'Esegui',
      es: 'Ejecutar'
    },
    'Load file': {
      it: 'Carica file',
      es: 'Cargar archivo'
    },
    'Reset': {
      it: 'Resetta',
      es: 'Reiniciar'
    },
    'Apply': {
      it: 'Applica',
      es: 'Aplicar'
    },
    'Update': {
      it: 'Aggiorna',
      es: 'Actualizar'
    },
    'Browse...': {
      it: 'Sfoglia...',
      es: 'Explorar...'
    },
    'Changes recorded': {
      it: 'Modifiche registrate',
      es: 'Se han guardado las modificaciones'
    },
    'No changes recorded': {
      it: 'Nessuna modifica registrata',
      es: 'No se ha guardado ninguna modificación'
    },
    'Leave empty if you don\'t want to change your password': {
      it: 'Lascia questo campo vuoto se non vuoi cambiare la password',
      es: 'Dejar este campo en blanco si no desea cambiar el password'
    },
    'MiB': // mebibyte
    {},
    'sec': // abbreviation of: seconds
    {es : 'seg'},

    // Overview page
    'Italian Olympiads in Informatics training website': {
      it: 'Portale di allenamento delle Olimpiadi Italiane di Informatica'
    },
    'Welcome to the official training website for OII! here you will be able to try and solve programming tasks by coding a solution in either C, C++ or Pascal.': {
      it: 'Benvenuto nella piattaforma ufficiale di allenamento per le OII! Qui avrai accesso a numerosi problemi ai quali potrai inviare delle soluzioni scritte in C, C++ o Pascal.'
    },
    'Learn to code': {
      it: 'Impara a programmare',
      es: 'Aprender a programar'
    },
    'Tasks archive': {
      it: 'Archivio dei problemi',
      es: 'Archivo de problemas'
    },
    'Advance your ranking': {
      it: 'Scala la classifica',
      es: 'Mejore su ranking'
    },
    'See the rankings': {
      it: 'Guarda la classifica',
      es: 'Ver los rankings'
    },
    'Get to know other coders': {
      it: 'Partecipa alla community',
      es: 'Conozca a otros programadores'
    },
    'Go to the forum': {
      it: 'Visita il forum',
      es: 'Visite el foro'
    },
    'The wide range of tasks available on this website will allow you to start from the easiest going to the toughest one: in this way you\'ll improve your programming abilities and your attitude to analyze and deal with hard computational problems!': {
      it: 'La vasta scelta di problemi presenti nel sito ti permette di partire da quelli più facili fino ad arrivare a quelli più difficili: in questo modo migliorerai sempre più le tue abilità di programmazione e la tua capacità di analizzare ed affrontare problemi computazionali!'
    },
    'By solving tasks on this website you\'ll earn points that will sum up to your total ranking. Compete with other italian students for the first place of the rankings page!': {
      it: 'Man mano che risolverai i problemi presenti sulla piattaforma guadagnerai dei punti che si sommeranno al tuo punteggio totale. Competi con tutti gli altri studenti e studentesse italiani per il traguardo del primo posto della classifica!'
    },
    'Introduce yourself to other students, discuss the tasks, clear up your doubts on: basic constructs of you programming language, algorithms and data structures, libraries, algorithm techniques, and much more!': {
      it: 'Presentati agli altri aspiranti olimpici nel forum della piattaforma, discuti dei problemi, risolvi tutti i tuoi dubbi su: costrutti di base del tuo linguaggio di programmazione, algoritmi e strutture dati di libreria, tecniche algoritmiche, e tanto altro!'
    },

    // Task page
    'Statement': {
      it: 'Testo',
      es: 'Enunciado'
    },
    'Attachments': {
      it: 'Allegati',
      es: 'Adjuntos'
    },
    'Stats': {
      it: 'Statistiche',
      es: 'Estadísticas'
    },
    'Submissions': {
      it: 'Sottoposizioni',
      es: 'Envíos'
    },
    'Memory limit': {
      it: 'Limite di memoria',
      es: 'Límite de memoria'
    },
    'Time limit': {
      it: 'Limite di tempo',
      es: 'Límite de tiempo'
    },
    'Tags': {
      it: 'Tag',
      es: 'Etiquetas'
    },
    'Tags list': {
      it: 'Elenco dei tag',
      es: 'Lista de etiquetas'
    },
    'Memory available for the execution of one testcase, measured in MiB.': {
      it: 'La quantità di memoria, in MiB, disponibile per l\'esecuzione di un testcase.',
      es: 'Cantidad de memoria disponible para la ejecución de un caso de prueba, medida en MiB'
    },
    'Time available for the execution of one testcase, measured in seconds.': {
      it: 'La quantità di tempo, in secondi, disponibile per l\'esecuzione di un testcase.',
      es: 'Tiempo disponible para la ejecución de un caso de prueba, medida en MiB'
    },
    'Tags are useful to classify tasks by a common characteristic or technique, such as: <i>greedy</i>, <i>graphs</i>, and so on.': {
      it: 'I tag servono per classificare e raggruppare i problemi in base ad una caratteristica comune, ad esempio: <i>greedy</i>, <i>grafi</i>, e così via.',
      es: 'Las etiquetas son útiles para clasificar los problemas por técnica o característica, como por ejemplo: <i>goloso</i>, <i>grafos</i>, etc.'
    },
    'Tag already exists': {
      it: 'Il tag esiste già',
      es: 'La etiqueta ya existe'
    },
    'Tag does not exist': {
      it: 'Tag inesistente',
      es: 'La etiqueta no existe'
    },
    'Task does not exist': {
      it: 'Problema inesistente',
      es: 'Problema inexistente'
    },
    'The task already has this tag': {
      it: 'Il problema ha già questo tag',
      es: 'El problema ya tiene esta etiqueta'
    },
    'Task does not have tag': {
      it: 'Il problema non ha tag',
      es: 'El problema no tiene etiqueta'
    },
    'Task correctly tagged': {
      it: 'Tag aggiunto correttamente al problema',
      es: 'Problema etiquetado correctamente'
    },
    'Task correctly untagged': {
      it: 'Tag rimosso correttamente dal problema',
      es: 'La etiqueta ha sido correctamente removida del problema'
    },

    // Submissions page
    'Submit a solution': {
      it: 'Invia una sottoposizione',
      es: 'Enviar una solución'
    },
    'Language:': {
      it: 'Linguaggio:',
      es: 'Lenguaje'
    },
    'Write your code here': {
      it: 'Scrivi qui il tuo codice',
      es: 'Escriba aquí su código'
    },
    'Previous submissions': {
      it: 'Sottoposizioni precedenti',
      es: 'Envíos previos'
    },
    'ID': {},
    'Time and date': {
      it: 'Data e ora',
      es: 'Fecha y hora'
    },
    'Status': {
      it: 'Stato',
      es: 'Estado'
    },
    'File(s)': {
      it: 'File',
      es: 'Archivo'
    },
    'Submission details': {
      it: 'Dettagli della sottoposizione',
      es: 'Detalles del envío'
    },
    'Compilation output': {
      it: 'Output della compilazione',
      es: 'Salida del compilador'
    },
    'Compilation outcome:': {
      it: 'Esito della compilazione:',
      es: 'Resultado de la compilación'
    },
    'Compilation time:': {
      it: 'Tempo di compilazione:',
      es: 'Tiempo de compilación'
    },
    'Used memory:': {
      it: 'Memoria utilizzata:',
      es: 'Memoria utilizada'
    },
    'Standard output': {es: 'Salida estándar'},
    'Standard error': {es: 'Salida de error estándar'},
    'Subtask': {es: 'Subtarea'},
    'Testcase': {es: 'Caso de prueba'},
    'Result': {
      it: 'Risultato',
      es: 'Resultado'
    },
    'Details': {
      it: 'Dettagli',
      es: 'Detalles'
    },
    'Time': {
      it: 'Tempo',
      es: 'Tiempo'
    },
    'Memory': {
      it: 'Memoria',
      es: 'Memoria'
    },
    'Too frequent submissions!': {
      it: 'Sottoposizioni troppo frequenti!',
      es: '¡Envíos demasiado frecuentes!'
    },
    'You have a pending submission': {
      it: 'Hai una sottoposizione in sospeso',
      es: 'Tienes un envío pendiente'
    },
    'Some files are missing!': {
      it: 'Mancano alcuni file!',
      es: 'Tienes un envío pendiente'
    },
    'The files you sent are too big!': {
      it: 'I file inviati sono troppo grandi!',
      es: '¡Los archivos enviados son demasiado grandes!'
    },
    'The language of the files you sent is not recognized!': {
      it: 'Linguaggio dei file inviati non riconosciuto!',
      es: '¡No se reconoce el lenguaje de los archivos enviados!'
    },
    'The files you sent are in different languages!': {
      it: 'I file inviati sono in linguaggi diversi!',
      es: '¡Los archivos enviados están en lenguajes diferentes!'
    },
    'Invalid archive!': {
      it: 'Archivio non valido!',
      es: '¡Archivo inválido!'
    },

    // Stats page
    'Number of people who solved it:': {
      it: 'Numero di persone che l\'hanno risolto:',
      es: 'Cantidad de usuarios que lo resolvieron:'
    },
    'Number of people who tried it:': {
      it: 'Numero di persone che l\'hanno provato:',
      es: 'Cantidad de usuarios que lo intentaron:'
    },
    'Number of correct submissions:': {
      it: 'Numero di soluzioni corrette:',
      es: 'Cantidad de envíos correctos:'
    },
    'Number of solutions submitted:': {
      it: 'Numero di soluzioni inviate:',
      es: 'Cantidad de envíos:'
    },
    'Users with the best solutions': {
      it: 'Utenti con le soluzioni migliori',
      es: 'Usuarios con las mejores soluciones:'
    },

    // Navbar buttons
    'Task & quiz archive': {
      it: 'Archivio problemi e quiz',
      es: 'Archivo de enunciados'
    },
    'All tasks': {
      it: 'Tutti i problemi',
      es: 'Todos los problemas'
    },
    'Lessons': {
      it: 'Lezioni',
      es: 'Lecciones'
    },
    'Task categories': {
      it: 'Problemi per categoria',
      es: 'Problemas por categoría'
    },
    'Quizzes': {
      it: 'Selezioni scolastiche',
      es: 'Quizzes'
    },
    'Ranking': {
      it: 'Classifica',
      es: 'Ranking'
    },
    'Forum': {es : 'Foros'},

    // User related
    'Sign up': {
      it: 'Registrati',
      es: 'Registrarse'
    },
    'Log in': {
      it: 'Entra',
      es: 'Entrar'
    },
    'Log out': {
      it: 'Esci',
      es: 'Salir'
    },
    'Forgot account?':
    {it: 'Hai dimenticato le credenziali?',
	 es: '¿Ha olvidado su cuenta?'},
    'No such user':
    {it: 'Utente inesistente',
	 es: 'Usuario inexistente'},
    'A code was sent, check your inbox':
    {it: 'Il codice è stato spedito, controlla la casella di posta',
	 es: 'Se le ha enviado un código, por favor revise su bandeja de entrada'},
    'You should already have received an email, if not, try tomorrow':
    {it: 'Dovresti aver già ricevuto una mail, altrimenti riprova domani',
	 es: 'Ya debería haber recibido un email, de no ser así, intente mañana'},
    'Your new password was mailed to you':
    {it: 'La nuova password ti è stata mandata per mail',
	 es: 'Se le ha enviado un email con el nuevo password'},
    'Wrong code':
    {it: 'Codice errato',
	 es: 'Código erróneo'},
    'Recover data':
    {it: 'Recupera credenziali',
	 es: 'Recuperar los datos'},
    'Confirm code':
    {it: 'Conferma codice',
	 es: 'Código de confirmación'},
    'Code':
    {it: 'Codice', es : 'Código'},
    'My user profile': {
      it: 'Il mio profilo utente',
      es : 'Mi perfil de usuario'
    },
    'Login data': {
      it: 'Dati di accesso al sito',
      es : 'Datos de acceso al sitio'
    },
    'Username': {es : 'Nombre de usuario'},
    'Password': {},
    'Confirm password': {
      it: 'Ripeti password',
      es: 'Confirme el password'
    },
    'Personal data': {
      it: 'Dati personali',
      es: 'Datos personales'
    },
    'First name': {
      it: 'Nome',
      es: 'Nombre'
    },
    'Last name': {
      it: 'Cognome',
      es: 'Apellido'
    },
    'E-mail address': {
      it: 'Indirizzo e-mail',
      es: 'Dirección de email'
    },
    'Confirm e-mail': {
      it: 'Ripeti e-mail',
      es: 'Confirme el email'
    },
    'Institute data': {
      it: 'Dati della scuola di provenienza',
      es: 'Datos de la escuela'
    },
    'Region': {
      it: 'Regione',
      es: 'Región'
    },
    'Province': {
      it: 'Provincia',
      es: 'Provincia'
    },
    'City': {
      it: 'Città',
      es: 'Ciudad'
    },
    'Institute': {
      it: 'Istituto',
      es: 'Escuela'
    },
    'User profile preview': {
      it: 'Anteprima del profilo utente',
      es: 'Vista previa del perfil de usuario'
    },
    'Profile': {
      it: 'Profilo',
      es: 'Perfil'
    },
    'Edit your data': {
      it: 'Modifica i tuoi dati',
      es: 'Modificar sus datos'
    },
    'Old password': {
      it: 'Vecchia password',
      es: 'Password anterior'
    },
    'New password': {
      it: 'Nuova password',
      es: 'Nuevo password'
    },
    'Confirm new password': {
      it: 'Ripeti nuova password',
      es: 'Confirme el nuevo password'
    },
    'New e-mail address': {
      it: 'Nuovo indirizzo email',
      es: 'Nueva dirección de email'
    },
    'Change your avatar at gravatar.com': {
      it: 'Cambia la tua foto di profilo su gravatar.com',
      es: 'Cambie su avatar en gravatar.com'
    },
    'Submitted tasks': {
      it: 'Problemi sottomessi',
      es: 'Problemas enviados'
    },
    'no submissions': {
      it: 'nessuna sottoposizione',
      es: 'ningún envío'
    },

    // Tasklist page
    'search': {
      it: 'cerca',
      es: 'búsqueda'
    },
    'Search by name': {
      it: 'Ricerca per nome',
      es: 'Búsqueda por nombre'
    },
    'no tasks found': {
      it: 'nessun problema trovato',
      es: 'no se encontraron problemas'
    },
    'Exercise': {
      it: 'Esercizio',
      es: 'Ejercicio'
    },

    // Errors
    'Username is too short': {
      it: 'Username troppo corto',
      es: 'El nombre de usuario es demasiado corto'
    },
    'Username is invalid': {
      it: 'Username non valido',
      es: 'El nombre de usuario es inválido'
    },
    'This username is not available': {
      it: 'Questo username non è disponibile',
      es: 'Nombre de usuario no disponible'
    },
    'You must specify your password': {
      it: 'Devi speficicare la tua password',
      es: 'Debe especificar su password'
    },
    'Password\'s too short': {
      it: 'Password troppo corta',
      es: 'El password es demasiado corto'
    },
    'Passwords don\'t match': {
      it: 'Le password non combaciano',
      es: 'Los passwords no coinciden'
    },
    'Wrong password': {
      it: 'Password errata',
      es: 'Password erróneo'
    },
    'Invalid e-mail': {
      it: 'E-mail non valida',
      es: 'Email inválido'
    },
    'E-mail already used': {
      it: 'E-mail già utilizzata',
      es: 'El email ya se encuentra en uso'
    },
    'E-mails don\'t match': {
      it: 'Gli indirizzi non combaciano',
      es: 'Los emails no coinciden'
    },
    'You must specify a region': {
      it: 'Devi specificare una regione',
      es: 'Debe especificar una región'
    },
    'You must specify a province': {
      it: 'Devi specificare una provincia',
      es: 'Debe especificar una provincia'
    },
    'You must specify a city': {
      it: 'Devi specificare una città',
      es: 'Debe especificar una ciudad'
    },
    'You must specify an institute': {
      it: 'Devi specificare un istituto',
      es: 'Debe especificar una escuela'
    },
    'Title is too short': {
      it: 'Titolo troppo corto',
      es: 'El título es demasiado corto'
    },
    'Description is too short': {
      it: 'Descrizione troppo corta',
      es: 'La descripción es demasiado corta'
    },
    'Text is too short': {
      it: 'Testo troppo corto',
      es: 'El texto es demasiado corto'
    },
    'User already exists': {
      it: 'Utente già esistente',
      es: 'Ya existe el usuario'
    },

    // Notifications
    'Welcome back': {
      it: 'Bentornato',
      es: 'Bienvenido otra vez'
    },
    'Login error': {
      it: 'Login errato',
      es: 'Error al ingresar'
    },
    'Make sure your internet connection is working and, if this error occurs again, contact an administrator.': {
      it: 'Assicurati che la tua connessione a internet sia funzionante e, se l\'errore dovesse ripetersi, contatta un amministratore.',
      es: 'Asegúrese de que su conexión a internet esté funcionando, y si el error persiste, contacte a un administrador.'
    },
    'Goodbye': {
      it: 'Arrivederci',
      es: 'Adiós'
    },
    'User doesn\'t exist': {
      it: 'Utente non esistente',
      es: 'Usuario inexistente'
    },
    'Internal error. Make sure your internet connection is working well and, if this error occurs again, contact an administrator.': {
      it: 'Errore interno. Assicurati che la tua connessione a internet sia funzionante e, se l\'errore dovesse ripetersi, contatta un amministratore.',
      es: 'Error interno. Asegúrese de que su conexión a internet esté funcionando, y si el error persiste, contacte a un administrador.'
    },
    'Internal error': {
      it: 'Errore interno',
      es: 'Error interno',
    },
    'Topic created': {
      it: 'Argomento creato',
      es: 'Tema creado'
    },
    'Reply sent': {
      it: 'Risposta inviata',
      es: 'Respuesta enviada'
    },
    'Edit saved': {
      it: 'Modifica salvata',
      es: 'Modificación guardada'
    },
    'Delete completed': {
      it: 'Eliminazione completata',
      es: 'Borrado completado'
    },
    'Connection error': {
      it: 'Errore di connessione',
      es: 'Error de conexión'
    },
    'Unauthorized': {
      it: 'Non autorizzato',
      es: 'No autorizado'
    },
    'Not found': {
      it: 'Non trovato',
      es: 'No encontrado'
    },

    // Forum
    'Forums': {
      it: 'Forum',
      es: 'Foros',
    },
    
    
    // OIA-added
    "Congratulations, the registration is successful, you can now log on with the credentials of your new account using the form at the top right. Once you're in the system you will have the opportunity to present solutions to task on this page. Good workout.": {
		it: "Complimenti, la registrazione è andata a buon fine, adesso puoi accedere con le credenziali del tuo nuovo account usando il modulo in alto a destra. Una volta entrato nel sistema avrai la possibilità di sottoporre le soluzioni ai task presenti in questa pagina. Buon allenamento.",
		es: "Felicitaciones, se ha registrado correctamente. Ya puede ingresar con los datos de su nueva cuenta utilizando los controles de la parte superior derecha. Una vez en el sistema, tendrá la oportunidad de enviar soluciones para los problemas del sitio. Buen entrenamiento."
	}
  })
  .factory('l10n', function(words) {
    if (localStorage.getItem("language") == undefined) {
		var language = "es";
      // Detect browser language (ISO 639) and save it in localStorage
      //var language = navigator.userLanguage || navigator.language;
      //if (language.length > 2)
      //  language = language.substring(0, 2);
        localStorage.setItem("language", language);
    }
    return {
      get: function(input) {
        if (input === undefined)
          return input;
        if (!words.hasOwnProperty(input)) {
          return input; // no matching found, return input string
        }
        var lang = localStorage.getItem("language") || "en";
        if (lang == "en")
          return input; // input is already in english, so just return it
        if (words[input].hasOwnProperty(lang))
          return words[input][lang];
        else
          return input;
      },
      getLanguage: function() {
        return localStorage.getItem("language") || "en";
      },
      setLanguage: function(language) {
        localStorage.setItem("language", language);
      }
    };
  })
  .filter('l10n', function(l10n) {
    return l10n.get;
  });
