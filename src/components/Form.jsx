import React, { useEffect, useRef, useState } from "react";
import 'boxicons';
function Form(){
    const Circle1=useRef();
    const Circle2=useRef();
    const Circle3=useRef();
    const Incorrect1=useRef();
    const Incorrect2=useRef();
    const Incorrect3=useRef();
    const passswordref=useRef();
    const [login,setLogin]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [isOKName,setisOkName]=useState(null);
    const [isOKLogin,setisOkLogin]=useState(null);
    const [isOKPassword,setisOkPassword]=useState(null);
    const [User,setUser]=useState(null);
    const [show,setShow]=useState(false);
    const [WasUser,setWasUser]=useState('');
    const [RenameUser,setRenameUser]=useState(false);
    const userIS=useRef(null);
    const sukaBlyatXyina=useRef();
    const SaveProfile=()=>{
        if(localStorage.getItem("Username/Login")!==null){
            console.log('tyt');
            if(userIS.current){
                return;
            }
            setWasUser(<div className="Form_has">
                <div className="Form_has_user">User IS</div>
                </div>)
            setRenameUser(<div onClick={()=>Rename()} className="Form_has_user_button">Rename?</div>)
            sukaBlyatXyina.current.style.display="none";
            userIS.current=setTimeout(() => {
                setWasUser('');
                userIS.current=null;
            }, 3000);
            
        }
        else{
            console.log('tyt');
        if(isOKLogin && isOKPassword && isOKName){
            console.log('tyt');
            const newUser={
                name:name,
                login:login,
                password:password,
            }
            setUser(newUser);
            localStorage.setItem("Username/Login",JSON.stringify(newUser));
            setName('');
            setPassword('');
            setLogin('');
            setisOkName(false);
            setisOkLogin(false);
            setisOkPassword(false); 
        }
    }
}

const Rename=()=>{
    if (isOKLogin && isOKPassword && isOKName) {
        
        console.log('Все поля валидны');
        const newUser = {
          name: name,
          login: login,
          password: password,
        };
        
        setUser(newUser);
        localStorage.setItem("Username/Login", JSON.stringify(newUser));
        
        // Сброс формы
        setName('');
        setPassword('');
        setLogin('');
        setisOkName(false);
        setisOkLogin(false);
        setisOkPassword(false);

    
      } else{
        console.log('Есть ошибки валидации');
        
        // Сбрасываем все ошибки
        Incorrect1.current.style.display = "none";
        Incorrect2.current.style.display = "none";
        Incorrect3.current.style.display = "none";
        
        // Показываем ошибки только для невалидных полей
        if (!isOKName) Incorrect1.current.style.display = "flex";
        if (!isOKLogin) Incorrect2.current.style.display = "flex";
        if (!isOKPassword) Incorrect3.current.style.display = "flex";
        
        // Дополнительная логика, если нужно выделить конкретные ошибки
        if (isOKName && !isOKLogin && !isOKPassword) {
          // Только имя валидно
          Incorrect2.current.style.display = "flex";
          Incorrect3.current.style.display = "flex";
        } else if (!isOKName && isOKLogin && !isOKPassword) {
          // Только логин валиден
          Incorrect1.current.style.display = "flex";
          Incorrect3.current.style.display = "flex";
        } else if (!isOKName && !isOKLogin && isOKPassword) {
          // Только пароль валиден
          Incorrect1.current.style.display = "flex";
          Incorrect2.current.style.display = "flex";
        }
      }
}
    const ggg=()=>{

        if(!show){
            setShow(true)
            passswordref.current.type="text";
        }else{
            setShow(false)
            passswordref.current.type="password";
        }
        
    }
    useEffect(()=>{
        if(localStorage.getItem("Username/Login")){
            sukaBlyatXyina.current.style.display="none";
            if(!RenameUser){
                setRenameUser(true)
            }
            
        }
    },[RenameUser])

    useEffect(()=>{
        if(name.length>=1){
            Incorrect1.current.style.display="flex";
            Circle1.current.style.display="none";
            if(name.length>=2){
                Circle1.current.style.display="flex";
                Incorrect1.current.style.display="none";
                setisOkName(true);
            }
        }else{
            Incorrect1.current.style.display="none";
            Circle1.current.style.display="none"; 
            setisOkName(false);
        }
        if(login.length>=1){
            console.log('tyt');
                Incorrect2.current.style.display="flex";
                Circle2.current.style.display="none";
                console.log('tyt');
            if(login.length>5 && login.includes('@') && login.includes('.')){
                console.log('tyt');
                Circle2.current.style.display="flex";
                Incorrect2.current.style.display="none";
                setisOkLogin(true);
            } 
        }
        else{
            Incorrect2.current.style.display="none";
            Circle2.current.style.display="none"; 
            setisOkLogin(false);
        }
        if (password.length >= 1) {
            Incorrect3.current.style.display = "flex";
            Circle3.current.style.display = "none";
            
            // Условия для валидного пароля:
            const hasNumber = /[0-9]/.test(password);
            const hasUpper = /[A-Z]/.test(password);
            const hasLower = /[a-z]/.test(password);
            const isLongEnough = password.length >= 8;
            
            if (hasNumber && hasUpper && hasLower && isLongEnough) {
              Circle3.current.style.display = "flex";
              Incorrect3.current.style.display = "none";
              setisOkPassword(true);
            } else {
              setisOkPassword(false);
            }
          } else {
            Incorrect3.current.style.display = "none";
            Circle3.current.style.display = "none"; 
            setisOkPassword(false);
          }

    },[name,password,login]);
    if(isOKPassword && isOKLogin && isOKName){
        console.log(isOKPassword);
        console.log(isOKLogin);
        console.log(isOKName);
    }


    return(
    <form className="Form">
        <h1>Your name</h1>
        <div className="container_inp_check">
        <input type="text" className="Education2_input" value={name}  onChange={((e)=>setName(e.target.value))} placeholder="Name"></input>
        <div ref={Circle1} className="Form_circle"></div>
        <div ref={Incorrect1} className="Form_incorrect"></div>
        </div>      
        <h1>Your login</h1>
        <div className="container_inp_check">
        <input type="email" className="Education2_input" value={login}  onChange={((e)=>setLogin(e.target.value))} placeholder="Login"></input>
        <div ref={Circle2} className="Form_circle"></div>
        <div ref={Incorrect2} className="Form_incorrect"></div>
        </div>
        <h1>Your password</h1>
        <div className="container_inp_check">
        <input ref={passswordref} type="password" className="Education2_input" value={password}  onChange={((e)=>setPassword(e.target.value))} placeholder="Password"></input>
        <box-icon onClick={()=>ggg()} name='lock' type='solid' ></box-icon>
        <div ref={Circle3} className="Form_circle"></div>
        <div ref={Incorrect3} className="Form_incorrect"></div>
        </div>
        {WasUser}
        {RenameUser && <div onClick={Rename} className="Form_has_user_button">Rename?</div>}
        <div ref={sukaBlyatXyina} className="Form_button" onClick={()=>SaveProfile()}>Try</div>  
    </form>
    )
}
export default Form