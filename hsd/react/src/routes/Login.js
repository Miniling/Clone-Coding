import axios from 'axios';
import '../css/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = function(){
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/login', {
          id: id,
          pw: pw
        })
        .then(function (response) {
          console.log(response);
          console.log(response.data)
          if(response.data.cnt>0){
          setTimeout(()=>{navigate('/')}, 1000);
          }
          
        })
        .catch(function (error) {
          console.log(error);
          console.log(2);
          //window.location.href='/';
        });
    };

    return(
        <>
        <div className='container'>
        <br/><br/><br/><br/><br/>
        <br/><br/><br/><hr/><br/><br/><br/>
        <h2>로그인</h2>
        <form id='loginform' onSubmit={handleSubmit} >
        <input 
          type="text" placeholder='아이디' onChange={(e) => setId(e.target.value)}
        /><br></br>
        <input 
          type="password" placeholder='비밀번호' onChange={(e) => setPw(e.target.value)}
        />
        <input type="submit" />
        </form>
        </div>
        </>
    )
}

export default Login;