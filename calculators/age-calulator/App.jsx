function App() {
  function submit(){
    const birthday = document.getElementById('birthday')
    const birthdayDate = new Date(birthday.value).toISOString().split("T")[0]
    const currentDate = new Date().toISOString().split("T")[0]
    const ageMillis = Date.parse(currentDate) - Date.parse(birthdayDate)
    const ageYears = Math.floor(ageMillis/1000/60/60/24/365)
    document.getElementById('age-result').innerHTML = `<h2>You are <span class="big-age">${ageYears}</span> years old!</h2>`
  }

  return (
    <main>
      <h1>How old are you?</h1>
      <h3>Err...🧠💨. Check fast using this age calculator.</h3>
      <div className="birthday-container">
        <label htmlFor='birthday'>Enter your birthday</label>
        <input name='birthday' id='birthday' type='date' max={new Date().toISOString().split("T")[0]}></input>
        <button id='submit-btn' type='submit' onClick={submit}>Submit</button>
      </div>
      <div id="age-result">
      </div>
    </main>
  )
}

export default App
