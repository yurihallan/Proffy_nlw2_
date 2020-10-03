import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (


        <article className="teacher-item">
                 <header>
                     <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGJNYsPBBBTxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=M-gve78edi277BhcXigMH7jFuawIsp0sYzHNTwwoFO0" 
                          alt="Yuri Hallan"/>
                    <div>
                        <strong>Yuri Hallan</strong>
                        <span>Física</span>
                    </div>                          
                 </header>

                <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, placeat cumque numquam, quibusdam ipsam qui dolorem deserunt iure id tempora repellat distinctio accusamus? Sapiente, voluptate exercitationem nihil voluptatum eius ea.
                     <br/><br/>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid nemo eligendi, voluptatem accusamus dignissimos debitis enim culpa impedit consectetur, atque laudantium unde magni sequi laborum esse vel neque, repellendus quaerat!
                </p>

                <footer>
                    <p>
                        Preço/hora
                        <strong>R$: 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
        </article>
                          
    );
}

export default TeacherItem;