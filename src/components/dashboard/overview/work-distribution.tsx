'use client';

import * as React from 'react';
import { user } from '@/app/data/user';
import { Avatar, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
// Icons
import { Database as ServerIcon } from '@phosphor-icons/react/dist/ssr/Database';
import { Monitor as ClientIcon } from '@phosphor-icons/react/dist/ssr/Monitor';
import { UsersThree as LeaderIcon } from '@phosphor-icons/react/dist/ssr/UsersThree';
import type { ApexOptions } from 'apexcharts';

import { Chart } from '@/components/core/chart';

const iconMapping = { 'Front-end': ClientIcon, 'Back-end': ServerIcon, Leadership: LeaderIcon } as Record<string, Icon>;

export interface WorkDistributionProps {
  chartSeries: number[];
  labels: string[];
  sx?: SxProps;
}

export function WorkDistribution({ chartSeries, labels, sx }: WorkDistributionProps): React.JSX.Element {
  const chartOptions = useChartOptions(labels);

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack direction="column" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={2}>
            <Avatar src={user.avatar} sx={{ height: '300px', width: '300px' }} />
          </Stack>
          <Stack spacing={2}>
            <Typography color="text.secondary" variant="h6">
              Santorini 2023
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <Divider />
      <CardHeader sx={{ textAlign: 'center' }} title="Work Experience Type" />
      <CardContent>
        <Stack spacing={2}>
          <Chart height={300} options={chartOptions} series={chartSeries} type="donut" width="100%" />
          <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            {chartSeries.map((item, index) => {
              const label = labels[index];
              const Icon = iconMapping[label];
              const hasColors = Boolean(chartOptions?.colors);
              const colors: string =
                hasColors && typeof chartOptions?.colors?.[index] === 'string' ? chartOptions?.colors[index] : '';

              return (
                <Stack key={label} spacing={1} sx={{ alignItems: 'center' }}>
                  {Icon ? <Icon fontSize="var(--icon-fontSize-lg)" color={colors} /> : null}
                  <Typography variant="h6">{label}</Typography>
                  <Typography variant="subtitle2">{item}%</Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function useChartOptions(labels: string[]): ApexOptions {
  const theme = useTheme();

  return {
    chart: { background: 'transparent' },
    colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.info.dark],
    dataLabels: { enabled: false },
    labels,
    legend: { show: false },
    plotOptions: { pie: { expandOnClick: false } },
    states: { active: { filter: { type: 'none' } }, hover: { filter: { type: 'none' } } },
    stroke: { width: 0 },
    theme: { mode: theme.palette.mode },
    tooltip: { fillSeriesColor: false },
  };
}
