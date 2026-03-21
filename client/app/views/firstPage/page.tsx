'use client'
import React, { useState } from 'react';
import styles from './styles.module.css';

const TextForm = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmitJson = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
  
    try {
      const response = await fetch('/api/send-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
      });
  
      if (!response.ok) {
        throw new Error('Ошибка при отправке текста');
      }
  
      setSuccess('Текст успешно отправлен!');
      setText('');
    } catch (err) {
      setError('Произошла ошибка: ' + (err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form id="text-form" onSubmit={handleSubmitJson} className={styles.textForm}>
      <div id="form-group" className={styles.formGroup}>
        <label id="label" className={styles.label} htmlFor="text-input">Введите текст:</label>
        <textarea className={styles.textArea}
          id="text-area"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите ваш текст здесь..."
          rows={6}
          required
        />
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}
      {success && <div className={styles.successMessage}>{success}</div>}

      <button id="submit-button" type="submit" disabled={isLoading} className={styles.submitButton}>
        {isLoading ? 'Отправляется...' : 'Отправить текст'}
      </button>
    </form>
  );
};

export default TextForm;
