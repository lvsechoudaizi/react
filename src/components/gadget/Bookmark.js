import React from 'react'
import { Icon } from 'antd'

const Bookmark = ({ status, onClick = () => {} }) => (
  <div className="ga-bookmark" onClick={onClick}>
    {status ? (
      <div className="bookmark-stared">
        <Icon type="star" />
      </div>
    ) : (
      <div className="bookmark-star">
        <Icon type="star-o" />
      </div>
    )}
    <div className="bookmark-label">{status ? '已收藏' : '收藏'}</div>
  </div>
)

export default Bookmark
