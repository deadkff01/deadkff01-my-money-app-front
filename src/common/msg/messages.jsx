import React from 'react'
import ReduxToaster from 'react-redux-toastr'
import '~MODULES/react-redux-toastr/lib/css/react-redux-toastr.min.css'

export default props => (
    <ReduxToaster
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
)
