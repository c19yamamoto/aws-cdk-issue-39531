#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { VpcFlowLogsStack } from '../lib/vpc-flow-logs-stack';

const app = new cdk.App();
new VpcFlowLogsStack(app, 'VpcFlowLogsCloudWatch');
