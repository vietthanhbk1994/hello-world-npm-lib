'use strict';

import React from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    button: {
        backgroundColor: '#CC2200',
        color: 'white',
        fontSize: 14,
        '&:hover': {
            backgroundColor: '#CC2200',
        }
    }
};

function DefaultButton(props) {
    const {classes, children, ...rest} = props;

    return (
        <Button
            variant="contained"
            className={classes.button}
            {...rest}
        >
            {children}
        </Button>
    );
}

DefaultButton.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default withStyles(styles)(DefaultButton);