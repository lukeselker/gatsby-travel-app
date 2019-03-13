import React from 'react';
import { buildUrl } from 'instafeed-lite';
import axios from 'axios';
import instagramStyles from './instagram.module.css';

const options = {
    accessToken: process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN,
    get: 'user', // popular, user
    limit: 4,
    resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
    sortBy: 'most-recent', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
    userId: process.env.GATSBY_INSTAGRAM_USER_ID,
  }

  const instagramUrl = buildUrl(options)


class Instafeed extends React.Component {
  state = {
    loading: false,
    error: false,
    pics: [],
  }
  componentDidMount() {
    this.fetchInstagramData()
  }

  render() {
    const { pics } = this.state;
    console.log(pics);
    return (
      pics.map(p => {
        return <a href={p.link} src>
          <div className={instagramStyles.rollover}>
            <img className={instagramStyles.img} src={p.images.standard_resolution.url} />
            <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <i className='fa fa-heart' style={{ margin: '5px', color: '#ff6363', ariaHidden: 'true' }}></i> <span style={{color: 'black'}}>{p.likes.count}</span>
              <i className='fa fa-comment' style={{ margin: '5px', color: 'gray', ariaHidden: 'true' }}></i> <span style={{color: 'black'}}>{p.comments.count}</span>
            </div>
          </div>
        </a>
      })
    )
  }

  fetchInstagramData = () => {
    this.setState({ loading: true })
    axios.get(instagramUrl)
      .then(pics => {
        this.setState({
          loading: false,
          pics: pics.data.data,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
}

export default Instafeed;
