import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../store/slices/cryptoSlice';
import { formatCurrency, formatLargeNumber, formatPercentage, getColorByValue } from '../utils/helpers';

const TableContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
`;

const TableHead = styled.thead`
  background-color: #f8fafd;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f8fafd;
  }
  border-bottom: 1px solid #eaeaea;
`;

const TableHeaderCell = styled.th`
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #616e85;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  
  &:hover {
    color: #3861fb;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #222531;
  text-align: left;
  white-space: nowrap;
`;

const RankCell = styled(TableCell)`
  width: 50px;
  color: #616e85;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CryptoLogo = styled.img`
  width: 24px;
  height: 24px;
`;

const CryptoName = styled.div`
  font-weight: 600;
`;

const CryptoSymbol = styled.span`
  color: #616e85;
  margin-left: 8px;
`;

const PriceCell = styled(TableCell)`
  font-weight: 600;
`;

const PercentChangeCell = styled(TableCell)<{ value: number }>`
  color: ${props => getColorByValue(props.value)};
  font-weight: 500;
`;

const ChartCell = styled(TableCell)`
  width: 150px;
`;

const ChartImage = styled.img`
  width: 100%;
  height: 40px;
`;

const CryptoTable: React.FC = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>#</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>1h %</TableHeaderCell>
            <TableHeaderCell>24h %</TableHeaderCell>
            <TableHeaderCell>7d %</TableHeaderCell>
            <TableHeaderCell>Market Cap</TableHeaderCell>
            <TableHeaderCell>Volume(24h)</TableHeaderCell>
            <TableHeaderCell>Circulating Supply</TableHeaderCell>
            <TableHeaderCell>Last 7 Days</TableHeaderCell>
          </TableRow>
        </TableHead>
        <tbody>
          {assets.map((asset) => (
            <TableRow key={asset.id}>
              <RankCell>{asset.rank}</RankCell>
              <TableCell>
                <NameContainer>
                  <CryptoLogo src={asset.logo} alt={asset.name} />
                  <CryptoName>
                    {asset.name}
                    <CryptoSymbol>{asset.symbol}</CryptoSymbol>
                  </CryptoName>
                </NameContainer>
              </TableCell>
              <PriceCell>{formatCurrency(asset.price)}</PriceCell>
              <PercentChangeCell value={asset.percentChange1h}>
                {formatPercentage(asset.percentChange1h)}
              </PercentChangeCell>
              <PercentChangeCell value={asset.percentChange24h}>
                {formatPercentage(asset.percentChange24h)}
              </PercentChangeCell>
              <PercentChangeCell value={asset.percentChange7d}>
                {formatPercentage(asset.percentChange7d)}
              </PercentChangeCell>
              <TableCell>{formatLargeNumber(asset.marketCap)}</TableCell>
              <TableCell>{formatLargeNumber(asset.volume24h)}</TableCell>
              <TableCell>
                {asset.circulatingSupply.toFixed(2)} {asset.symbol}
                {asset.maxSupply && (
                  <span style={{ color: '#616e85' }}>
                    {' '}
                    / {asset.maxSupply.toFixed(2)}
                  </span>
                )}
              </TableCell>
              <ChartCell>
                <ChartImage src={asset.chart7d} alt="7d chart" />
              </ChartCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable; 