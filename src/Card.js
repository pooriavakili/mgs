import React,{Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./card.css"
export default class Card extends Component{
    render(){
        return(
<div className='container'>
    <div className='row mt-4 ticketCard'>
        <div className='col-1 d-flex flex-column align-items-center'>
            <div className='gheshm mt-2 d-flex justify-content-center align-items-center'>
        <img
             src={require('./img/gheshm.png')}  alt="gheshm"/>
            </div>
        <p className=' mr-2 '>قشم ایر</p>
        </div>
        <div className='col-9'>
            <div className='mt-3 mr-5'>
         <p className='text-right'>اکونومی</p>
            </div>
            <div className='d-flex flex-row align-items-center'>
                <p className='watchOne col-3 text-center mb-0'>
                 تهران 17:30
                </p>
                <svg className='col-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2389.241 219.127"><g transform="translate(1268 -23.428)"><g transform="translate(901.955 242.555) rotate(-90)"><g transform="translate(87.651 0)"><path d="M36.234,9.91A16.674,16.674,0,0,0,25.723.5,15.5,15.5,0,0,0,7.981,8.577,76.543,76.543,0,0,0,0,42.926V157.2a3.662,3.662,0,0,0,.066.69L9.9,208.834a12.171,12.171,0,0,0,12,10.453h.018A12.115,12.115,0,0,0,33.9,209.024l9.861-51.13a3.375,3.375,0,0,0,.069-.69V42.919A76.5,76.5,0,0,0,36.234,9.91Zm.289,146.938L26.7,207.825a4.833,4.833,0,0,1-9.594-.186l-9.8-50.787V42.908a69.253,69.253,0,0,1,7.217-31.08,8.149,8.149,0,0,1,9.189-4.31,9.414,9.414,0,0,1,5.873,5.412,69.457,69.457,0,0,1,6.935,30Z" fill="#d2d2d2"/></g><g transform="translate(0 80.503)"><path d="M93.174.515A3.646,3.646,0,0,0,89.566.442L1.914,47.921A3.65,3.65,0,0,0,0,51.131V73.044a3.658,3.658,0,0,0,4.934,3.422L92.587,43.6a3.659,3.659,0,0,0,2.37-3.422V3.652A3.655,3.655,0,0,0,93.174.515ZM87.652,37.643,7.3,67.774V53.308L87.652,9.789Z" fill="#d2d2d2"/></g><g transform="translate(124.174 80.504)"><path d="M93.043,47.919,5.391.441A3.651,3.651,0,0,0,0,3.651V40.173A3.652,3.652,0,0,0,2.367,43.6l87.652,32.87a3.748,3.748,0,0,0,1.286.23,3.605,3.605,0,0,0,2.074-.65,3.652,3.652,0,0,0,1.574-3V51.13A3.654,3.654,0,0,0,93.043,47.919ZM87.652,67.772,7.3,37.642V9.783L87.652,53.306Z" fill="#d2d2d2"/></g><g transform="translate(47.478 84.159)"><path d="M10.957,0A10.97,10.97,0,0,0,0,10.957V21.913H7.3V10.957a3.652,3.652,0,1,1,7.3,0v3.652h7.3V10.957A10.969,10.969,0,0,0,10.957,0Z" fill="#d2d2d2"/></g><g transform="translate(14.608 102.416)"><path d="M10.957,0A10.97,10.97,0,0,0,0,10.957V21.913H7.3V10.957a3.652,3.652,0,0,1,7.3,0h7.3A10.969,10.969,0,0,0,10.957,0Z" fill="#d2d2d2"/></g><g transform="translate(149.739 84.159)"><path d="M10.957,0A10.97,10.97,0,0,0,0,10.957v3.652H7.3V10.957a3.652,3.652,0,0,1,7.3,0V21.913h7.3V10.957A10.969,10.969,0,0,0,10.957,0Z" fill="#d2d2d2"/></g><g transform="translate(182.608 102.416)"><path d="M10.957,0A10.97,10.97,0,0,0,0,10.957H7.3a3.652,3.652,0,0,1,7.3,0V21.913h7.3V10.957A10.969,10.969,0,0,0,10.957,0Z" fill="#d2d2d2"/></g><g transform="translate(54.783 175.982)"><path d="M46.872,28.746,7.3,35.342V27.114L42.051,6.263,38.293,0,1.771,21.913A3.642,3.642,0,0,0,0,25.043V39.652A3.655,3.655,0,0,0,3.652,43.3a4.116,4.116,0,0,0,.6-.048l43.826-7.3Z" fill="#d2d2d2"/></g><g transform="translate(116.271 175.982)"><path d="M46.3,21.913,9.78,0,6.022,6.263l34.751,20.85v8.224L1.2,28.742,0,35.948l43.826,7.3a3.672,3.672,0,0,0,.6.051,3.655,3.655,0,0,0,3.649-3.652V25.042A3.653,3.653,0,0,0,46.3,21.913Z" fill="#d2d2d2"/></g><g transform="translate(98.798 22.068)"><path d="M19.046,5.964A8.925,8.925,0,0,0,10.727,0,8.616,8.616,0,0,0,2.484,6.129L0,13.433l6.917,2.352L9.448,8.327A1.4,1.4,0,0,1,10.77,7.3a1.421,1.421,0,0,1,1.348.964L14.6,15.755l6.932-2.3Z" fill="#d2d2d2"/></g></g><rect width="39" height="14" transform="translate(815 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-88 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(514 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-389 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(213 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-690 129)" fill="#d2d2d2"/><rect width="40" height="14" transform="translate(754 129)" fill="#d2d2d2"/><rect width="40" height="14" transform="translate(-149 129)" fill="#d2d2d2"/><rect width="40" height="14" transform="translate(453 129)" fill="#d2d2d2"/><rect width="40" height="14" transform="translate(-450 129)" fill="#d2d2d2"/><rect width="40" height="14" transform="translate(152 129)" fill="#d2d2d2"/><rect width="40" height="14" transform="translate(-751 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(694 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-209 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(393 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-510 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(92 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-811 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(634 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-269 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(333 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-570 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(32 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-871 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(574 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-329 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(273 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-630 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-28 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-931 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-991 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-1051 129)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-1111 130)" fill="#d2d2d2"/><rect width="39" height="14" transform="translate(-1171 130)" fill="#d2d2d2"/><g transform="translate(-1268 92)" fill="none" stroke="#ffbb3e" stroke-width="12"><circle cx="44.5" cy="44.5" r="44.5" stroke="none"/><circle cx="44.5" cy="44.5" r="38.5" fill="none"/></g></g></svg>
                <p className='watchOne text-center col-3 mb-0'>شیراز 17:30</p>
            </div>
        </div>
            <div className='col-2 d-flex align-items-center justify-content-start'>
                <div className=' d-flex  flex-column'>
                <h4 className='text-success text-center'>2.266.000</h4>
                <button className='btn btn-primary pr-5 pl-5 '>رزو انلاین</button>
                </div>
            </div>
        </div>
    </div>


        )
    }
}