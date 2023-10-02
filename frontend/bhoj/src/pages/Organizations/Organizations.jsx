import React from 'react'
import './Organizations.scss'
import { Link } from 'react-router-dom'

const Organizations = () => {
    const data = [
        {
            id:1,
            image: 'https://img.freepik.com/free-photo/3d-deal-hand-shake-design-element_460848-11295.jpg?w=2000&t=st=1696223093~exp=1696223693~hmac=ef44bbf2e5b4b564bc63c560adaaa03136bf0b5f595307061e0594b9675d958e',
            name: 'Org 1',
            link: ''
        },
        {
            id:2,
            image: 'https://img.freepik.com/free-photo/top-view-colorful-decorative-frame_23-2148209980.jpg?w=2000&t=st=1696223460~exp=1696224060~hmac=02bc61e133813d2bbe4b3686bef11c83a72fb8861a917d3e32cf89f8f5cc4800',
            name: 'Org 2',
            link: ''
        },
        {
            id:3,
            image: 'https://img.freepik.com/free-photo/paper-style-soccer-match_23-2148930674.jpg?w=2000&t=st=1696223480~exp=1696224080~hmac=fe28af8b3afe07306a716a61840caaa5243499035058e43b54ca2bbdd1ae43be',
            name: 'Org 3',
            link: ''
        },
        {
            id:4,
            image: 'https://img.freepik.com/free-photo/paper-style-sport-flame_23-2148930716.jpg?w=2000&t=st=1696223494~exp=1696224094~hmac=c23a21b1c18d1117071c19faa4ef754673526445cf68b0515a7ffad00638b491',
            name: 'Org 4',
            link: ''
        },
        {
            id:5,
            image: 'https://img.freepik.com/free-photo/paper-style-cycling-competition_23-2148930710.jpg?w=1800&t=st=1696223506~exp=1696224106~hmac=23e50e055f3acb54d11a97ea5b15c692d90e252d18c13b46122b20e79b07a145',
            name: 'Org 5',
            link: ''
        }
    ]
  return (
    <div className='org'>
        <div className="container">
            <h1>Our Partners</h1>
            {data.map(d => (
                <div className="card" key={d.id}>
                    <img src={d.image} alt={d.name} />
                    <span className="name">
                        {d.name}
                    </span>
                    <Link to={d.link} className='link'><button>View</button></Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Organizations;
