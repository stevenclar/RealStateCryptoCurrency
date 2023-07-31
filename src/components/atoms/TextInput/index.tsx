import React, {forwardRef, useMemo, useState} from 'react';
import {
  TextInput as TextInputPaper,
  TextInputProps as TextInputPaperProps,
  useTheme,
} from 'react-native-paper';
import {View} from 'react-native';

const TextInput: React.FC<TextInputProps> = forwardRef(
  (
    {
      style,
      containerStyle,
      secureTextEntry,
      placeholder,
      right,
      rightAction,
      onFocus,
      onBlur,
      ...rest
    }: TextInputProps,
    ref: any,
  ) => {
    const [hide, setHide] = useState(true);
    const {
      colors: {primary, surface},
      dark,
    } = useTheme();

    const rightNode = useMemo(() => {
      return secureTextEntry ? (
        <TextInputPaper.Icon
          icon={hide ? 'eye-off' : 'eye'}
          onPress={() => setHide(!hide)}
          color={primary}
          size={24}
        />
      ) : right ? (
        <TextInputPaper.Icon
          icon={right}
          color={primary}
          size={24}
          disabled={!rightAction}
          onPress={rightAction}
        />
      ) : null;
    }, [secureTextEntry, right, hide, primary, rightAction]);

    React.useEffect(() => {
      console.log(rightNode);
    }, [rightNode]);

    return (
      <View style={containerStyle}>
        <TextInputPaper
          autoComplete="off"
          mode="outlined"
          right={rightNode}
          blurOnSubmit={false}
          autoCorrect={false}
          style={[
            {
              backgroundColor: surface,
            },
            style,
          ]}
          onFocus={e => {
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={e => {
            if (onBlur) {
              onBlur(e);
            }
          }}
          selectionColor={primary}
          ref={ref}
          keyboardAppearance={dark ? 'dark' : 'light'}
          secureTextEntry={secureTextEntry && hide}
          placeholder={placeholder}
          {...rest}
        />
      </View>
    );
  },
);

export interface TextInputProps extends TextInputPaperProps {
  containerStyle?: any;
  right?: string;
  rightAction?: () => void;
}

export default TextInput;
