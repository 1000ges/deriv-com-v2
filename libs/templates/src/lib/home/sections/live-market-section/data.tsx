import { LiveMarketContent } from '@deriv-com/components';
import {
  MarketForexEurusdIcon,
  MarketForexGbpusdIcon,
  MarketForexUsdjpyIcon,
  MarketForexAudusdIcon,
} from '@deriv/quill-icons/Markets';

export const LivePriceData: LiveMarketContent[] = [
  {
    id: 1,
    instrumentIcon: <MarketForexEurusdIcon />,
    instrument: 'EUR/USD',
    changePercentage: '+0.11%',
    status: 'up',
    bidPrice: '1.07219',
    askPrice: '1.07223',
    spread: '0.00005',
  },
  {
    id: 2,
    instrumentIcon: <MarketForexGbpusdIcon />,
    instrument: 'GBP/USD',
    changePercentage: '+0.11%',
    status: 'down',
    bidPrice: '1.24112',
    askPrice: '1.24502',
    spread: '0.0001',
  },
  {
    id: 3,
    instrumentIcon: <MarketForexUsdjpyIcon />,
    instrument: 'USD/JPY',
    changePercentage: '+0.11%',
    status: 'remain',
    bidPrice: '0.24234',
    askPrice: '0.24265',
    spread: '0.00005',
  },
  {
    id: 4,
    instrumentIcon: <MarketForexAudusdIcon />,
    instrument: 'AUD/USD',
    changePercentage: '0.00%',
    status: 'closed',
    bidPrice: '0.66118',
    askPrice: '0.66243',
    spread: '0.00005',
  },
];
