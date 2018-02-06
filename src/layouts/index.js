import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Movie Landing Page"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      script={[
        {src:"https://use.fontawesome.com/5039aeaf7a.js"},
        {src:"node_modules/lodash/lodash.js"},
        {src:"https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js"},
        {src:"https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js"},
      ]}
      link={[
        {href:"https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700|Seymour+One", rel:"stylesheet"},
        {href:"//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css", rel:"stylesheet"},
        {href:"https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css", rel:"stylesheet"},
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
