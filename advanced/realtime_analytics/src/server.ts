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

import { EventProcessor } from './services/EventProcessor';
import { MetricsAggregator } from './services/MetricsAggregator';
import { AlertManager } from './services/AlertManager';
import { DashboardManager } from './services/DashboardManager';
import { logger } from './utils/logger';

class AnalyticsPlatform {
    private app: express.Application;
    private io: Server;
    private prisma: PrismaClient;
    private kafka: Kafka;
    private eventProcessor: EventProcessor;
    private metricsAggregator: MetricsAggregator;
    private alertManager: AlertManager;
    private dashboardManager: DashboardManager;

    constructor() {
        this.app = express();
        this.prisma = new PrismaClient();
        this.setupDependencies();
        this.setupMiddleware();
        this.setupRoutes();
        this.setupWebSockets();
        this.setupQueues();
    }

    private async setupDependencies() {
        // Setup Kafka
        this.kafka = new Kafka({
            clientId: 'analytics-platform',
            brokers: ['localhost:9092']
        });

        // Setup Redis
        const redis = createClient({
            url: process.env.REDIS_URL
        });

        // Setup services
        this.eventProcessor = Container.get(EventProcessor);
        this.metricsAggregator = Container.get(MetricsAggregator);
        this.alertManager = Container.get(AlertManager);
