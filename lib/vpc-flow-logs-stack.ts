import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class VpcFlowLogsStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const vpc = ec2.Vpc.fromVpcAttributes(this, 'Vpc', {
      vpcId: 'vpc-0123456789abcdef0',
      availabilityZones: ['us-east-1a'],
    });

    new ec2.FlowLog(this, 'FlowLog', {
      resourceType: ec2.FlowLogResourceType.fromVpc(vpc),
    });
  }
}
