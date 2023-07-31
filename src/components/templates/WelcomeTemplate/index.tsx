import React from 'react';
import {Text, useTheme} from 'react-native-paper';
import {View} from 'react-native';
import color from 'color';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import {styles} from './styles';

interface WelcomeTemplateProps {
  onEmail: () => void;
}

const WelcomeTemplate = ({onEmail}: WelcomeTemplateProps) => {
  const {
    colors: {surface, secondary, inversePrimary},
  } = useTheme();

  const subtitleColor = color(surface).alpha(0.3).string();

  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>{'Crypto Currency App'}</Text>
      <Logo style={styles.logo} />
      <View>
        <Text style={[styles.subtitle]}>{'Join the crypto revolution'}</Text>
        <View>
          <Button
            onPress={onEmail}
            buttonColor={secondary}
            mode="text"
            labelStyle={[styles.smallButtonLabel, {color: inversePrimary}]}
            style={styles.button}>
            {'Get started'}
          </Button>
          <Text style={[styles.footer, {color: subtitleColor}]}>
            {
              'Cumplimiento del ADA: De acuerdo con las pautas de la Asociación Nacional de Agentes Inmobiliarios, Million and Up Realty Miami se compromete a proporcionar un sitio web accesible. Si tiene dificultad para acceder al contenido, tiene dificultad para ver un archivo en el sitio web o nota algún problema de accesibilidad, por favor comuníquese con nosotros al 305-677-2196 para especificar la naturaleza del problema de accesibilidad y cualquier tecnología de asistencia que usted utiliza. Nos esforzamos por proporcionar el contenido que necesita en el formato que lo requiera.'
            }
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeTemplate;
