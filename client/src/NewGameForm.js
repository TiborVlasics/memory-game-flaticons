import React from 'react';
import { useHistory } from 'react-router-dom'

function NewGameForm(props) {
  const history = useHistory();

  const onChange = (e) => {
    props.setBoardSize(e.target.value);
  }

  return (<div className="new-game-form">
    <h2 className="new-game-form__header">Válaszd ki a tábla méretét!</h2>
    <div className="new-game-form__option-holder">
      <input onChange={onChange} type="radio" id="radio-4" name="gamesize" value="4" defaultChecked />
      <label htmlFor="radio-4">4</label>
    </div>
    <div className="new-game-form__option-holder">
      <input onChange={onChange} type="radio" id="radio-8" name="gamesize" value="8"/>
      <label htmlFor="radio-8">8</label>
    </div>
    <div className="new-game-form__option-holder">
      <input onChange={onChange} type="radio" id="radio-14" name="gamesize" value="14"/>
      <label htmlFor="radio-14">14</label>
    </div>
    <div className="new-game-form__button-holder">
      <button onClick={
        () => {
          history.push('game')
        }
      }>Start</button>
    </div>
  </div>)
}

export default NewGameForm