/**
 * Real-time Analytics Platform
 * Features:
 * - Event Processing
 * - Real-time Dashboards
 * - Data Aggregation
 * - Custom Metrics
 * - Alerting System
 */

import express from 'express';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import { createClient } from 'redis';
import { Kafka } from 'kafkajs';
import { Container } from 'typedi';
import { useExpressServer } from 'routing-controllers';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import Queue from 'bull';

