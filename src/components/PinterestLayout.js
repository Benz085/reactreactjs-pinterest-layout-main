import React from 'react';

import Card from './Card.js';

function PinterestLayout() {
    return (
        <div style={styles.pin_container}>
            <Card size="small" >
                <img  
                style={{ backgroundSize: 'contain', width: '230px', height: '230px',borderRadius: '16px' }}
                src='https://i.pinimg.com/564x/cb/15/58/cb1558d935c1bd61fcc01387f03d05dc.jpg'/>
            </Card>
            <Card size="medium" />
            <Card size="large" />
            <Card size="medium" />
            <Card size="small" />
            <Card size="medium" />
            <Card size="medium" />
            <Card size="large" />
            <Card size="large" />
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
}

export default PinterestLayout;