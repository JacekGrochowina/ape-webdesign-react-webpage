import styled, { css } from 'styled-components';
import iconCheck from 'assets/icons/iconCheck.svg';

const Item = styled.li`
    position: relative;
    font-family: ${({ theme }) => theme.fontFamily.leading};
    font-size: ${({ fontSize }) => `${fontSize}px`};
    line-height: 1.6;
    color: ${({ theme }) => theme.color.gray};
    list-style: none;
    padding-left: ${({ iconSize }) => iconSize == null ? 
        "40px" :
        `${iconSize+20}px`
    };
    min-height: ${({ iconSize }) => iconSize == null ? 
        "auto" :
        `${iconSize}px`
    };
    ::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: ${({ iconSize }) => iconSize == null ? 
            "20px" :
            `${iconSize}px`
        };
        height: ${({ iconSize }) => iconSize == null ? 
            "20px" :
            `${iconSize}px`
        };
        background-image: ${({ icon }) => icon == null ? 
            `url(${iconCheck})` :
            `url(${icon})`
        };
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    ${({ card }) =>
    card &&
    css`
        font-family: ${({ theme }) => theme.fontFamily.leading};
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.color.gray};
        list-style: none;
        border-bottom: 1px solid ${({ theme }) => theme.color.light};
        padding: 10px 20px;
        text-align: center;
        ::before {
            content: none;
        }
    `}

    ${({ numbering }) =>
    numbering &&
    css`
        font-family: ${({ theme }) => theme.fontFamily.leading};
        color: ${({ theme }) => theme.color.gray};
        list-style: decimal-leading-zero;
        list-style-position: inside;
        padding: 5px 20px;
        margin-top: 10px;
        border-top: 1px solid  ${({ theme }) => theme.color.light};
        ::before {
            content: none;
        }
    `}

    ${({ circle }) =>
    circle &&
    css`
        font-family: ${({ theme }) => theme.fontFamily.leading};
        color: ${({ theme }) => theme.color.gray};
        list-style: circle;
        list-style-position: inside;
        margin-left: 25px;
        padding: 0 20px;
        ::before {
            content: none;
        }
    `}
`;

export default Item;