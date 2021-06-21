import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Switch from 'react-switch'
import { shade } from 'polished' // Lib para lidar com cores

import {Container} from './styles'
// ThemeContext permite acessar dados do tema em qualquer lugar da aplicação atraves do useContext.

interface Props {
  toggleTheme(): void;
}

const Header : React.FC<Props> = ({toggleTheme}) => {

  const {colors, title} = useContext(ThemeContext)

  return (
    <Container>
      Hello Word
      <Switch 
      onChange={toggleTheme} 
      checked={title === 'dark'} 
      checkedIcon={false} 
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={shade(0.15, colors.primary)}
      onColor={colors.secondary}
      />
    </Container>
  )
}

export default Header
