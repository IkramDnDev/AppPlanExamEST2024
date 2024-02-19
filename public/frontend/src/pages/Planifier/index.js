import "./style.css"


export default function Planifier(){
    return(
        <div className="planningContainer">
      <div className="container">
        <h1>PLANIFIER DES EXAMENS</h1>

        <div className="form-container">
          <label htmlFor="module">Ajouter un module:</label>
          <input type="text" id="module" name="module" />

          <label htmlFor="local">Ajouter un local:</label>
          <input type="text" id="local" name="local" />

          <label htmlFor="session">Choisissez une session:</label>
          <select id="session" name="session">
            <option value="" disabled selected hidden>Choisissez une session</option>
          </select>

          <label htmlFor="typeSession">Choisissez le type de session:</label>
          <select id="typeSession" name="typeSession">
            <option value="" disabled selected hidden>Choisissez le type de session</option>
          </select>

          <label htmlFor="date">Choisissez la date:</label>
          <input type="date" id="date" name="date" />

          <div className="date-container">
            <div className="column">
              <label htmlFor="dateDebut">
                <blockquote>Début: </blockquote>
              </label>
              <input type="time" id="dateDebut" name="dateDebut" />
            </div>

            <div className="column">
              <label htmlFor="dateFin">
                <blockquote>Fin: </blockquote>
              </label>
              <input type="time" id="dateFin" name="dateFin" />
            </div>

            <div className="column">
              <button className="buttonTrash">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          <div className="button-container">
            <button>
              <i className="fas fa-plus"></i>
            </button>
            <button>Générer le planning</button>
          </div>
        </div>
      </div>
    </div>
    );
}