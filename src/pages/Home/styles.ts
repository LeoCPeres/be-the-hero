import styled from "styled-components";

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 350px;

      img.logo {
        align-self: flex-start;
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
          margin-top: 6rem;
          font-size: 2.3rem;
          font-weight: 500;
          margin-bottom: 2rem;

          align-self: flex-start;
        }

        input {
          width: 100%;
          border: 1px solid var(--gray);
          height: 3.5rem;

          border-radius: 0.5rem;

          padding: 1rem;

          font-size: 1.1rem;

          color: var(--text-title);

          &::placeholder {
            color: var(--text-secondary);
          }
        }

        button {
          width: 100%;

          margin: 1rem 0;

          background: var(--red);

          border: none;
          height: 3.5rem;
          border-radius: 0.5rem;

          font-size: 1.1rem;
          color: var(--background);

          font-weight: 700;

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }

        div.register {
          display: flex;
          flex-direction: row;
          justify-self: flex-start;
          padding: 1rem;
        }
      }
    }
  }
`;
