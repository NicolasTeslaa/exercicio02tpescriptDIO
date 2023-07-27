import { login } from "../services/login"
import { Link } from "react-router-dom";

export default function LoginPageForm() {

    return (
        <div className='container mt-5' >
        <div className='card w-100 loginCard'>
            <div className='card-header d-flex justify-content-center'>

            </div>
            <div className='card-body'>
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Password</label>
                <input type="password" className="form-control mb-4" id="exampleFormControlInput1" placeholder="*********" />

                <div className='row'>
                    <div className='col-sm-6'>
                        <Link to="/dashboard" onClick={login} className="btn btn-sm btn-primary">
                            Button
                        </Link>
                    </div>
                    <div className='col-sm-6 d-flex justify-content-end'>
                        <p>Ainda não tem conta?</p>
                        <Link to="/registrar">Registrar</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    )
}


