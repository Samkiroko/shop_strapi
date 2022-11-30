import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Bags
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              {' '}
              <img
                src='https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Bags
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Bags
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
