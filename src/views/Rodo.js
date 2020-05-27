import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Section from 'components/atoms/Section';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph/index';
import List from 'components/atoms/List/List';
import Item from 'components/atoms/Item/Item';

const StyledParagraph = styled(Paragraph)`
    margin-top: 20px;
`;

const Rodo = () => {
    return (
        <Section>
            <Container>
                <Heading>Polityka prywatności</Heading>
                <StyledParagraph>Od dnia 25 Maja 2018r wchodzi w życie Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016r. w sprawie ochrony osób fizycznych, dotyczące przetwarzania danych osobowych i ich swobodnego przepływu. W związku z powyższym informujemy, że Państwa dane osobowe są przetwarzanezgodnie z tym rozporządzeniem.</StyledParagraph>
                <List>
                    <Item numbering>Administratorem danych osobowych jest firma APE Piotr Wysocki, ul Wyszyńskiego 19/3, 87-800 Włocławek.</Item>
                    <Item numbering>Państwa dane przetwarzane będą w wersji elektronicznej i papierowej:</Item>
                    <Item circle>w celu wykonania umowy kupna-sprzedaży produktów oraz usług,</Item>
                    <Item circle>w celu wypełnienia obowiązków prawnych i publicznych, do których zobligowany jest Administrator (na podstawie Art. 6, ust.1 rozporządzeniem Parlamentu Europejskiego),</Item>
                    <Item circle>w celach marketingowych (przedstawiania ofert, tworzenia zestawień, analiz i statystyk wykorzystywanych przez Administratora).</Item>
                    <Item numbering>Dane osobowe jakie będą przetwarzane przez APE Piotr Wysockito: nazwa firmy, imię i nazwisko; adres e-mail; numer telefonu.</Item>
                    <Item numbering>Podanie danych osobowych jest dobrowolne, chyba że przepisy prawa stanowią inaczej.</Item>
                    <Item numbering>Przetwarzanie danych osobowych odbywa się wyłącznie za zgodą Administratora i dotyczy:</Item>
                    <Item circle>realizacji działań związanych z wykonaniem umowy, zlecenia, zakupu itp. właściwych dla prowadzonej działalności gospodarczej,</Item>
                    <Item circle>podmiotów wspierających wykonanie umowy (m.in.: firmy kurierskie; firmy windykacyjne),</Item>
                    <Item circle>usług doradczych świadczonych na rzecz Administratora (m.in.: usługi audytorskie, konsultacyjne).</Item>                    <Item numbering>Podanie danych osobowych jest dobrowolne, chyba że przepisy prawa stanowią inaczej.</Item>
                    <Item numbering>Posiadane dane osobowe będą przechowywane w okresie prowadzenia działalności gospodarczej przez formę APE Piotr Wysocki, a w przypadku dochodzenia roszczeń – do czasu ich przedawnienia.</Item>
                    <Item numbering>Mają Państwo prawo do:</Item>
                    <Item circle>dostępu do treści swoich danych,</Item>
                    <Item circle>sprostowania, usunięcia lub ograniczenia przetwarzania danych,</Item>
                    <Item circle>przenoszenia danych,</Item>
                    <Item circle>wniesienia sprzeciwu,</Item>
                    <Item circle>cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</Item>
                </List>
                <Paragraph>Ponadto mają Państwo prawo do wniesienia skargi do Prezesa Urzędu ds. OchronyDanych Osobowych w przypadku, gdy uznają Państwo, że przetwarzanie danych osobowych narusza przepisy rozporządzenia.</Paragraph>
                <Paragraph>Firma APE Piotr Wysocki zgodnie z przepisami prawa dokłada wszelkich starań, aby zapewnić możliwe środki ochrony danych osobowych przed ich przypadkowym lub umyślnym zniszczeniem, utratą, ujawnieniem lub wykorzystaniem.</Paragraph>
                <Paragraph>Niniejsze pismo ma charakter informacyjny z datą wejścia w życie dnia 25 Maja 2018r.</Paragraph>
            </Container>
        </Section>
    );
};

export default Rodo;