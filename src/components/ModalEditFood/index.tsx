import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import Input from '../Input';

import { FormHandles } from '@unform/core';

import { FoodObject } from '../../pages/Dashboard';

interface ModalEditFoodProps {
  isOpen: boolean;
  editingFood: FoodObject;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdateFood: (food: FoodObject) => void;
}

export const ModalEditFood = ({ isOpen, editingFood, setIsOpen, handleUpdateFood }: ModalEditFoodProps): JSX.Element => {
  const handleSubmit = async (data: FoodObject) => { handleUpdateFood(data); setIsOpen(false); }

  const formRef = createRef<FormHandles>();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

