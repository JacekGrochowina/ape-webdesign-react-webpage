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
`;

export default Item;