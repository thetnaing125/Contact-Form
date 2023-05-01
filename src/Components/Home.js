import '../App.css'
const Home = (props) =>{
    return(
       <body>
             <div className='box'>
                <span className='borderline'></span>
                <form>
                    <h2>CONTACT FORM</h2>
                    
                    <div className='inputBox'>
                        <input type="text" required="required"/>
                        <span>Username</span>
                        <i></i>
                    </div>


                    
                    <div className='inputBox'>
                        <input type="text" required="required"/>
                        <span>Password</span>
                        <i></i>
                    </div>


                    <div className='links'>
                        <a href="foo">Forget Password</a>
                        <a href="foo">Signup</a>
                    </div>

                    <input type="submit" value="Login"/>

                </form>
        </div>
       </body>
    )
}
export default Home;