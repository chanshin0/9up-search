import { css } from '@emotion/react';

const styles = {
  col: css`
    display: flex;
    flex-direction: column;
  `,
  row: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  layout: css`
    padding: 24px;
    width: 100%;
    max-width: 1280px;
    @media (max-width: 1280px) {
      max-width: 100%;
    }
  `,
  FilterArea: {
    category: css`
      min-width: 6rem;
      background-color: rgb(249, 250, 252);
      border-right: 1px solid rgb(225, 226, 228);
    `,
    filterRow: css`
      padding: 0 8px;
    `,
    chip: css`
      margin: 8px;
    `,
  },
  SearchArea: {
    base: css`
      display: flex;
      width: 100%;
      padding: 12px 0;
      border: 1px solid rgb(201, 202, 204);
      border-radius: 4px;
      margin: 12px 0;
      background-color: white;
      &:focus-within {
        border-color: #524fa1; /* 포커스될 때 보더 색상을 변경 */
      }
    `,
    textBox: css`
      width: 100%;
      border: none;
      outline: none;
      ::placeholder {
        color: gray;
      }
    `,
    icon: css`
      margin: 0 16px;
    `,
  },
  searchResultArea: {
    title: css`
      font-size: 8px;
      font-weight: bold;
      margin-top: 28px;
    `,
    courseGrid: css`
      display: grid;
      grid-template-columns: repeat(4, 296px); /* 4개의 코스 카드 */
      gap: 16px; /* X, Y 축 간격 */
      padding: 0 24px 28px 24px; /* Body padding */
      justify-content: center;
      @media (max-width: 1232px) {
        grid-template-columns: repeat(
          auto-fill,
          minmax(296px, 1fr)
        ); /* 반응형 */
      }
    `,
    courseCard: css`
      width: 296px;
      height: 338px;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `,
    label: css`
      font-size: 12px;
      font-weight: bold;
      color: #524fa1;
    `,
    title: css`
      font-size: 18px;
      font-weight: bold;
      color: #222;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    description: css`
      font-size: 14px;
      color: #5e5f61;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    iconText: css`
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #7d7e80;
      gap: 8px;
    `,
    logo: css`
      object-fit: contain;
      align-self: flex-end;
    `,
  },
  pagination: {
    container: css`
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    `,
    box: css`
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      color: #999;
      border-radius: 4px;
      border: 1px solid;
      cursor: pointer;
    `,
    active: css`
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      background-color: #524fa1;
      border-radius: 4px;
      color: white;
    `,
    arrowDisabled: css`
      width: 22px;
      height: 22px;
      color: #ccc;
      cursor: not-allowed;
      margin: 0 4px;
    `,
    arrowActive: css`
      width: 22px;
      height: 22px;
      color: #222;
      cursor: pointer;
      margin: 0 4px;
    `,
  },
};

export default styles;
