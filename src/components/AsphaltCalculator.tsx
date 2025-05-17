'use client';

import { useState, useEffect } from 'react';

// 沥青密度常数 (lb/ft³)
const ASPHALT_DENSITY = 145;

export default function AsphaltCalculator() {
  // 输入状态
  const [inputs, setInputs] = useState({
    length: 1,
    width: 1,
    depth: 1,
    unit: 'imperial', // 'imperial' or 'metric'
    pricePerTon: 0,
  });

  // 结果状态
  const [results, setResults] = useState({
    area: 0,
    volume: {
      cubicFeet: 0,
      cubicMeters: 0,
    },
    weight: {
      tons: 0,
      metricTons: 0,
    },
    cost: 0,
  });

  // 输入变化处理器
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    let parsedValue = parseFloat(value);
    
    // 确保数值有效
    if (name !== 'unit' && (isNaN(parsedValue) || parsedValue < 0)) {
      parsedValue = 0;
    }
    
    setInputs((prev) => ({
      ...prev,
      [name]: name === 'unit' ? value : parsedValue,
    }));
  };

  // 计算结果
  useEffect(() => {
    const { length, width, depth, unit, pricePerTon } = inputs;

    // 计算面积
    let area: number;
    let volume: number;
    let volumeCubicFeet: number;
    let volumeCubicMeters: number;
    let weightTons: number;
    let weightMetricTons: number;

    if (unit === 'imperial') {
      // 英制单位 (英尺和英寸)
      area = length * width; // 平方英尺
      volume = (area * depth) / 12; // 立方英尺 (深度从英寸转换为英尺)
      volumeCubicFeet = volume; // 立方英尺
      volumeCubicMeters = volume * 0.0283168; // 立方米
      weightTons = volume * ASPHALT_DENSITY / 2000; // 吨 (将英制密度转换为吨/ft³)
      weightMetricTons = weightTons * 1.10231; // 公吨 (将吨转换为公吨)
    } else {
      // 公制单位 (米和厘米)
      area = length * width; // 平方米
      volume = (area * depth) / 100; // 立方米 (深度从厘米转换为米)
      volumeCubicMeters = volume; // 立方米
      volumeCubicFeet = volume / 0.0283168; // 立方英尺
      weightMetricTons = volume * 2322 / 1000; // 公吨 (将公制密度转换为公吨/m³)
      weightTons = weightMetricTons * 0.907185; // 吨 (将公吨转换为吨)
    }

    // 计算成本
    const cost = unit === 'imperial' 
      ? weightTons * pricePerTon 
      : weightMetricTons * pricePerTon;

    setResults({
      area: Number(area.toFixed(2)),
      volume: {
        cubicFeet: Number(volumeCubicFeet.toFixed(3)),
        cubicMeters: Number(volumeCubicMeters.toFixed(3)),
      },
      weight: {
        tons: Number(weightTons.toFixed(3)),
        metricTons: Number(weightMetricTons.toFixed(3)),
      },
      cost: Number(cost.toFixed(2)),
    });
  }, [inputs]);

  return (
    <div id="calculator" className="calculator-grid">
      {/* 输入表单 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Asphalt Calculator Input</h2>
        
        <div className="mb-6">
          <label className="block mb-4 font-medium">
            Measurement Units:
            <select
              name="unit"
              value={inputs.unit}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-md"
            >
              <option value="imperial">Imperial (ft, in, lb, tons)</option>
              <option value="metric">Metric (m, cm, kg, tonnes)</option>
            </select>
          </label>
        </div>

        <div className="mb-6">
          <label className="block mb-4 font-medium">
            Length:
            <div className="flex items-center">
              <input
                type="number"
                name="length"
                value={inputs.length}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full mt-2 p-2 border rounded-md"
              />
              <span className="ml-2">{inputs.unit === 'imperial' ? 'feet' : 'meters'}</span>
            </div>
          </label>
        </div>

        <div className="mb-6">
          <label className="block mb-4 font-medium">
            Width:
            <div className="flex items-center">
              <input
                type="number"
                name="width"
                value={inputs.width}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full mt-2 p-2 border rounded-md"
              />
              <span className="ml-2">{inputs.unit === 'imperial' ? 'feet' : 'meters'}</span>
            </div>
          </label>
        </div>

        <div className="mb-6">
          <label className="block mb-4 font-medium">
            Depth:
            <div className="flex items-center">
              <input
                type="number"
                name="depth"
                value={inputs.depth}
                onChange={handleInputChange}
                min="0"
                step="0.1"
                className="w-full mt-2 p-2 border rounded-md"
              />
              <span className="ml-2">{inputs.unit === 'imperial' ? 'inches' : 'centimeters'}</span>
            </div>
          </label>
        </div>

        <div className="mb-6">
          <label className="block mb-4 font-medium">
            Price per {inputs.unit === 'imperial' ? 'ton' : 'metric ton'}:
            <div className="flex items-center">
              <span className="mr-2">$</span>
              <input
                type="number"
                name="pricePerTon"
                value={inputs.pricePerTon}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="w-full mt-2 p-2 border rounded-md"
              />
            </div>
          </label>
        </div>
      </div>

      {/* 结果显示 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Asphalt Calculation Results</h2>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Area:</h3>
          <p className="text-gray-700">
            {results.area} {inputs.unit === 'imperial' ? 'square feet' : 'square meters'}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Volume:</h3>
          <p className="text-gray-700">
            {inputs.unit === 'imperial' 
              ? `${results.volume.cubicFeet} cubic feet`
              : `${results.volume.cubicMeters} cubic meters`
            }
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Weight:</h3>
          <p className="text-gray-700">
            {inputs.unit === 'imperial'
              ? `${results.weight.tons} tons (US)`
              : `${results.weight.metricTons} metric tons`
            }
          </p>
        </div>

        {inputs.pricePerTon > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Estimated Cost:</h3>
            <p className="text-xl font-bold text-green-700">${results.cost}</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded-md">
          <h4 className="text-sm font-medium text-blue-700 mb-2">Calculation Notes:</h4>
          <ul className="text-xs text-blue-600 list-disc list-inside space-y-1">
            <li>Hot mix asphalt density used: {ASPHALT_DENSITY} lb/ft³</li>
            <li>Results are approximate and may vary based on specific asphalt mix and compaction</li>
            <li>Cost estimates do not include labor, equipment, or other project expenses</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 