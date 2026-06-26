+++
title = '遥感影像预处理流程：从辐射校正到几何配准'
date = 2026-06-18T14:00:00+08:00
draft = false
categories = ['geo-remote-sensing']
summary = '概述遥感影像预处理的主要环节，说明辐射校正、大气校正与几何校正各自解决什么问题。'
references = [
  'zhangPrefaceAdvancingDeep2025',
  'hoxhaSelfSupervisedCrossModalTextImage2025',
  'HighQualitySmallFire',
  'yaoTransformingGlobalWater2026',
  'guiAdvancingOperationalGlobal2026'
]
+++

原始遥感影像通常不能直接用于定量分析。预处理的目标，是把传感器记录的数字值（DN）转换为 **具有物理意义、空间位置可靠** 的数据产品。

## 1. 辐射校正

辐射校正用于削弱传感器自身带来的系统误差，常见步骤包括：

- **定标**：将 DN 值转换为辐射亮度或反射率；
- **条纹去除**：处理扫描线噪声；
- **坏线修复**：修正异常像元。

若跳过辐射校正，不同时间获取的影像将难以进行可比分析。

## 2. 大气校正

电磁波穿过大气时会发生散射与吸收，导致地表信号被“污染”。大气校正的目标是尽量恢复地表真实反射率或辐射亮度。

在植被监测、水体提取等主题中，大气校正往往决定分类结果的稳定性。

## 3. 几何校正

几何误差来自平台姿态变化、地形起伏和地球曲率等因素。几何校正通过控制点或 DEM 进行配准，使影像与真实地理位置对齐。

对于多时相变化检测，几何精度不足会造成“伪变化”。

## 推荐工作流

```text
原始影像
  → 辐射定标
  → 大气校正
  → 几何配准
  → 裁剪 / 镶嵌
  → 后续分析
```

## 实践提醒

1. 先明确研究任务是 **定性解译** 还是 **定量反演**，再决定预处理深度。
2. 保留每一步中间结果，便于排查误差来源。
3. 文档化参数设置，保证实验可复现。

## 与 Transformer 建模的关系

随着遥感时序分析从单景分类转向高频、多源和跨模态任务，Transformer/注意力结构越来越常被用来处理长时序依赖与多模态对齐。近期综述指出，遥感时序深度学习已开始从 LSTM、CNN 过渡到注意力网络和 Transformer，并进一步探索面向遥感时序的基础模型 {{< cite zhangPrefaceAdvancingDeep2025 >}}。在具体应用中，Transformer 已被用于跨模态文本-影像时序检索 {{< cite hoxhaSelfSupervisedCrossModalTextImage2025 >}}，也被用于小火点早期监测中的时空特征建模 {{< cite HighQualitySmallFire >}}。水循环监测中的 BERTH 和气溶胶预报中的 vision transformer + U-Net 结构，则说明 Transformer 思路正在进入更大尺度的定量地球系统建模 {{< cite yaoTransformingGlobalWater2026 >}} {{< cite guiAdvancingOperationalGlobal2026 >}}。

因此，预处理不是可有可无的“前置杂活”：辐射一致性、几何对齐和大气校正会直接影响 Transformer 模型能否学习到稳定的时序与空间关系。

预处理看似繁琐，但它是后续机器学习建模与地学解释的基础。
