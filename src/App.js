function App() {
  return (
    <>
      <h1 className="signup">sign up</h1>
      <label for="Email">Email :</label>
      <input type="text" id="Email"></input> <br></br>
      <label for="password">password :</label>
      <input type="text" id="password"></input>
      <br></br>
      <label for="type">user type : </label>
      <label>patient:</label>
      <input name="user type" value="patient" type="radio"></input>
      <label>doctor:</label>
      <input name="user type" value="doctor" type="radio"></input> <br></br>
      <button type="sign up">
        <b>sign up</b>
      </button>

      <h2 className="login">log in</h2>
      <label for="Email">Email :</label>
      <input type="text" id="Email"></input> <br></br>
      <label for="password">password :</label>
      <input type="text" id="password"></input>
      <br></br>
      <button type="sign up">
        <b>login</b>
      </button>

      <h3 className="myslots">hello,user (user type: doctor) <br></br> my slots</h3>
      <table style={{ border: 1 }}>
        <tr>
          <th>date</th>
          <th>hour</th>
          <th> </th>
          <th> </th>
        </tr>
        <tr>
          <td>10/11/2023</td>
          <td>1:00 pm</td>
          <td>edit</td>
          <td>cancle</td>
        </tr>
        <tr>
          <td>15/3/2023</td>
          <td>5:00 pm</td>
          <td>edit</td>
          <td>canscl</td>
        </tr>
      </table> <br></br>

      <h4 className="createslot">create slot</h4>
      <table style={{ border: 1 }}>
        <tr>
          <th>date</th>
          <th>10/11/2023</th>
        </tr>
        <tr>
          <th>hour</th>
          <th>1:00 pm</th>
        </tr>
      </table> <br></br>
      <button type="add slot">
        <b>add slot</b>
      </button> <br></br>
      <br></br>

      <h5 className="myappointments">hello,user (user type: patient) <br></br>my appointments</h5>
      <table style={{ border: 1 }}>
        <tr>
          <th>appointment date</th>
          <th>appointment time </th>
          <th>doctor </th>
          <th> </th>
          <th> </th>
        </tr>
        <tr>
          <th>10/11/2023 </th>
          <th>1:00 pm </th>
          <th>dr. ahmed </th>
          <th>edit </th>
          <th>cancle </th>
        </tr>
        <tr>
          <th>15/3/2023 </th>
          <th>5:00 pm </th>
          <th>dr. mostafa </th>
          <th>edit </th>
          <th>cancle </th>
        </tr>
        <tr>
          <th>10/9/2021 </th>
          <th>1:00 pm </th>
          <th>dr. ali </th>
          <th>edit </th>
          <th>cancle </th>
        </tr>
        <tr>
          <th>15/4/2021 </th>
          <th>5:00 pm </th>
          <th>dr. mohamed </th>
          <th>edit </th>
          <th>cancle </th>
        </tr>
      </table> <br></br>

      <h6 className="createappointment">create new appointment</h6>
      <table style={{ border: 1 }}>
        <tr>
          <th>choose doctor</th>
          <th>
          <select type="doctor" id="language">
                <option value="">Select doctor</option>
                <option value="dr. ahmed">dr. ahmed</option>
                <option value="dr. mostafa">dr. mostafa</option>
                <option value="dr. ali">dr. ali</option>
                <option value="dr. mohamed">dr. mohamed</option>
            </select>
          </th>
        </tr>
        <tr>
          <th>appointment</th>
          <th> </th>
        </tr>
      </table> <br></br>
      <button type="reserve">
        <b>reserve</b>
      </button> <br></br>


    </>
  );
}

export default App;
