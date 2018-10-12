import {Box} from 'indoqa-react-fela'
import * as React from 'react'
// TODO: withNamespaces is not supported yet (2018-10-05) --> see ./src/main/typings
import {InjectedTranslateProps, withNamespaces} from 'react-i18next'

import Button from '../../commons/components/atoms/Button'

export interface ButtonDispatchProps {
  loadVienna: () => void,
  loadNewYork: () => void,
  loadViennaAndNewYork: () => void,
  loadInvalidLocation: () => void,
  clear: () => void,
}

interface Props extends ButtonDispatchProps, InjectedTranslateProps {}

const Buttons = ({t, loadVienna, loadNewYork, loadViennaAndNewYork, loadInvalidLocation, clear}: Props) => (
  <Box mb={2}>
    <Button onClick={loadVienna}>{t('Vienna')}</Button>
    <Button onClick={loadNewYork}>{t('New York')}</Button>
    <Button onClick={loadViennaAndNewYork}>{t('Vienna')} {t('and')} {t('New York')}</Button>
    <Button onClick={loadInvalidLocation}>{t('Invalid Location')}</Button>
    <Button onClick={clear}>{t('Clear')}</Button>
  </Box>
)

export default withNamespaces('translations')(Buttons)
