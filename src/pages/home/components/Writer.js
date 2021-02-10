import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterTitle, WriterItem } from '../style'
class Writer extends PureComponent {
  render () {
    const { list } = this.props
    return (
     <WriterWrapper>
        <WriterTitle>Recommend Authors</WriterTitle>
        {
          list.map((item) =>{
            return (
              <WriterItem key={item.get('id')}>
                <img className='pic' src={item.get('avatar_source')} alt='' />
                <p className='follow'>+ Follow</p>
                <p className = 'nickname'>{item.get('nickname')}</p>
                <p className='total'>{item.get('total_wordage')} words · {item.get('total_likes_count')} Followers</p>
              </WriterItem>
            )
          })
        }  
     </WriterWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapState, null)(Writer);