import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import logoIgnite from '../../assets/Logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransationModal } from '../NewTransationModal'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIgnite} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton> Nova Transação</NewTransationButton>
          </Dialog.Trigger>
          <NewTransationModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
